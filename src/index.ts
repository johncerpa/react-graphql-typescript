import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import microConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { PostResolver } from './resolvers/post';
import "reflect-metadata";

const PORT = process.env.PORT || 4000;

const main = async () => {

    const orm = await MikroORM.init(microConfig);

    
    // Run migrations
    await orm.getMigrator().up();

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver],
            validate: false,
        }),
        context: () => ({ em: orm.em })
    });

    apolloServer.applyMiddleware({ app });

    app.get('/', (_, res) => {
        res.send("hello");
    });

    app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`)
    });
}


main().catch(err => {
    console.error(err);
});