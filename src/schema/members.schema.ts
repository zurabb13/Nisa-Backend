import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MembersDocument = MembersSchema & Document;
@Schema()
export class MembersSchema {
  @Prop()
  img: string;

  @Prop()
  name: string;

  @Prop()
  about: string;

  @Prop()
  color: string;

  @Prop()
  position: string;
}
export const MembersSchemaFactory = SchemaFactory.createForClass(MembersSchema);
