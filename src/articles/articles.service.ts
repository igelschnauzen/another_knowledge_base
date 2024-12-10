import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './schemas/article.schema';

@Injectable()
export class ArticlesService {
  constructor(@InjectModel(Article.name) private articleModel: Model<Article>) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async findAllPublic(): Promise<Article[]> {
    return this.articleModel.find({ "attribute": "public" }).exec();
  }

  async findOne(id: string): Promise<Article> {
    return this.articleModel.findById(id).exec();
  }

  async findOnePublic(id: string): Promise<Article> {
    return this.articleModel.findOne({ _id: id, isPublic: true }).exec();
  }

  async findByTags(tags: string): Promise<Article[]> {
    return this.articleModel.find({ tags: { $in: tags } }).exec();
  }

  async findByTagsPublic(tags: string): Promise<Article[]> {
    return this.articleModel.find({ tags: { $in: tags }, isPublic: true }).exec();
  }

  async update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article> {
    return this.articleModel.findByIdAndUpdate(id, updateArticleDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Article> {
    return this.articleModel.findByIdAndDelete(id).exec();
  }
}