import { Controller, Post, Body, Get, Param, Patch, Delete, UseGuards, Request } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  findAll(@Request() req) {
    if (req.user) {
      return this.articlesService.findAll();
    } else {
      return this.articlesService.findAllPublic();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    if (req.user) {
      return this.articlesService.findOne(id);
    } else {
      return this.articlesService.findOnePublic(id);
    }
  }

  @Get('getByTags/:tags')
  findByTags(@Param('tags') tags: string, @Request() req) {
    if (req.user) {
      return this.articlesService.findByTags(tags);
    } else {
      return this.articlesService.findByTagsPublic(tags);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(id, updateArticleDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(id);
  }
}