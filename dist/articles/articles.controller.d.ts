import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(createArticleDto: CreateArticleDto): Promise<import("./schemas/article.schema").Article>;
    findAll(): Promise<import("./schemas/article.schema").Article[]>;
    findOne(id: string): Promise<import("./schemas/article.schema").Article>;
    findByTags(tags: string): Promise<import("./schemas/article.schema").Article[]>;
    update(id: string, updateArticleDto: UpdateArticleDto): Promise<import("./schemas/article.schema").Article>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
