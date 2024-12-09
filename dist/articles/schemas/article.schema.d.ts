import { Document } from 'mongoose';
export declare class Article extends Document {
    header: string;
    content: string;
    tags: string[];
    attribute: 'public' | 'internal';
}
export declare const ArticleSchema: import("mongoose").Schema<Article, import("mongoose").Model<Article, any, any, any, Document<unknown, any, Article> & Article & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Article, Document<unknown, {}, import("mongoose").FlatRecord<Article>> & import("mongoose").FlatRecord<Article> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
