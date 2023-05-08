import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ImageDocument = ImagesSchema & Document;
@Schema()
export class ImagesSchema {
  @Prop()
  img: string;

  @Prop()
  alt: string;
}
export const ImageSchemaFactory = SchemaFactory.createForClass(ImagesSchema);
