import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Article extends Document {
  @Prop({ required: true })
  header: string;

  @Prop({ required: true })
  content: string;

  @Prop([String])
  tags: string[];

  @Prop({ required: true })
  attribute: 'public' | 'internal';
}

export const ArticleSchema = SchemaFactory.createForClass(Article);