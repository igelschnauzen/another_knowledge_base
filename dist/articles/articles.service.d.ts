import { Model, DeleteResult } from 'mongoose';
import { Article } from './schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesService {
    private articleModel;
    constructor(articleModel: Model<Article>);
    create(createArticleDto: CreateArticleDto): Promise<Article>;
    findAll(): Promise<Article[]>;
    findOne(id: string): Promise<Article>;
    update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article>;
    findByTags(tags: string): Promise<Article[]>;
    remove(id: string): Promise<DeleteResult>;
}
