"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const article_schema_1 = require("./schemas/article.schema");
let ArticlesService = class ArticlesService {
    constructor(articleModel) {
        this.articleModel = articleModel;
    }
    async create(createArticleDto) {
        const createdArticle = new this.articleModel(createArticleDto);
        return createdArticle.save();
    }
    async findAll() {
        return this.articleModel.find().exec();
    }
    async findOne(id) {
        return this.articleModel.findById(id).exec();
    }
    async update(id, updateArticleDto) {
        return this.articleModel.findByIdAndUpdate(id, updateArticleDto, { new: true }).exec();
    }
    async findByTags(tags) {
        return this.articleModel.find({ tags: { $in: tags } }).exec();
    }
    async remove(id) {
        return this.articleModel.deleteOne({ _id: id }).exec();
    }
};
exports.ArticlesService = ArticlesService;
exports.ArticlesService = ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(article_schema_1.Article.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArticlesService);
//# sourceMappingURL=articles.service.js.map