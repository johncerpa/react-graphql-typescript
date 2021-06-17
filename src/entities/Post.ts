import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType() // GraphQL type
@Entity() // Mikro-ORM Entity
export default class Post {
    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property({ type: "date" })
    createdAt = new Date();

    @Field(() => String)
    @Property({ type: "date", onUpdate: () => new Date() })
    modifiedAt = new Date();

    // If you want a field that GraphQL cannot query then remove @Field()
    @Field()
    @Property({ type: "text" })
    title!: string;
}