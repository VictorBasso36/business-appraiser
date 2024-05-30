import { registerEnumType } from '@nestjs/graphql';

export enum CommentOrderByRelevanceFieldEnum {
    id = "id",
    content = "content",
    companyId = "companyId"
}


registerEnumType(CommentOrderByRelevanceFieldEnum, { name: 'CommentOrderByRelevanceFieldEnum', description: undefined })