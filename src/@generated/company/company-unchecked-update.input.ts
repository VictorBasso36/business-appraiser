import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutCompanyNestedInput } from '../user/user-unchecked-update-many-without-company-nested.input';
import { CommentUncheckedUpdateManyWithoutCompanyNestedInput } from '../comment/comment-unchecked-update-many-without-company-nested.input';

@InputType()
export class CompanyUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    cnpj?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    location?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    rating?: StringFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutCompanyNestedInput, {nullable:true})
    User?: UserUncheckedUpdateManyWithoutCompanyNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutCompanyNestedInput, {nullable:true})
    Comment?: CommentUncheckedUpdateManyWithoutCompanyNestedInput;
}