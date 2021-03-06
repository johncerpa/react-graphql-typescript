import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import Post from "./entities/Post";
import path from 'path';

export default {
    dbName: 'lireddit',
    user: 'jhon',
    password: 'cerpafam',
    type: 'postgresql',
    entities: [Post],
    migrations: {
        path: path.join(__dirname,  './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];