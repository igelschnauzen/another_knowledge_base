import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, DeleteResult } from 'mongoose';
import { Article } from './schemas/article.schema';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article.name) private articleModel: Model<Article>) { }

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async findOne(id: string): Promise<Article> {
    return this.articleModel.findById(id).exec();
  }

  async update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article> {
    return this.articleModel.findByIdAndUpdate(id, updateArticleDto, { new: true }).exec();
  }

  async findByTags(tags: string): Promise<Article[]> {
    return this.articleModel.find({ tags: { $in: tags } }).exec();
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.articleModel.deleteOne({ _id: id }).exec();
  }
}