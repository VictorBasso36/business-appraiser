import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentResponseWhereInput } from './comment-response-where.input';
import { Type } from 'class-transformer';
import { CommentResponseOrderByWithRelationAndSearchRelevanceInput } from './comment-response-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CommentResponseWhereUniqueInput } from './comment-response-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommentResponseScalarFieldEnum } from './comment-response-scalar-field.enum';

@ArgsType()
export class FindFirstCommentResponseOrThrowArgs {

    @Field(() => CommentResponseWhereInput, {nullable:true})
    @Type(() => CommentResponseWhereInput)
    where?: CommentResponseWhereInput;

    @Field(() => [CommentResponseOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<CommentResponseOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => CommentResponseWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommentResponseWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CommentResponseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CommentResponseScalarFieldEnum>;
}
