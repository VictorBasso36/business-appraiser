import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Comment } from '../comment/comment.model';
import { CompanyCount } from './company-count.output';

@ObjectType()
export class Company {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    cnpj!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true,defaultValue:0})
    ratingCount!: number | null;

    @Field(() => Float, {nullable:true})
    rating!: number | null;

    @Field(() => [User], {nullable:true})
    User?: Array<User>;

    @Field(() => [Comment], {nullable:true})
    Comment?: Array<Comment>;

    @Field(() => CompanyCount, {nullable:false})
    _count?: CompanyCount;
}
