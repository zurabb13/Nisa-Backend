import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UsersSchema & Document;

@Schema()
export class UsersSchema {
  @Prop()
  img: string;

  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop()
  social: { link: string; icon: string }[];
}
export const UserSchemaFactory = SchemaFactory.createForClass(UsersSchema);
