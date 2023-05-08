import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MeetDocument = MeetSection & Document;

@Schema()
export class MeetSection {
  @Prop()
  info: string;

  @Prop()
  text: string;
}
export const MeetSectionSchemaFactory =
  SchemaFactory.createForClass(MeetSection);
