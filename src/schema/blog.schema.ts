import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BlogDocument = BlogSchema & Document;
@Schema()
export class BlogSchema {
  @Prop()
  id: string;

  @Prop()
  img: string;

  @Prop()
  text: string;

  @Prop()
  header: string;

  @Prop()
  stories: string;

  @Prop()
  category: string;

  @Prop()
  data: string;

  @Prop()
  body: string;

  @Prop()
  bodyText: string;

  @Prop()
  story: string;

  @Prop()
  storyText2: string;

  @Prop()
  footer: string;
}
export const BlogSchemaFactory = SchemaFactory.createForClass(BlogSchema);
