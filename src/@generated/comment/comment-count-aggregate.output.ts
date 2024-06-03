import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CommentCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    content!: number;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Int, {nullable:false})
    approved!: number;

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
