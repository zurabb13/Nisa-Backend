import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = ClientSchema & Document;

Schema();
export class ClientSchema {
  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop()
  name: string;

  @Prop()
  position: string;

  @Prop()
  image: string;
}

export const ClientSchemaFactory = SchemaFactory.createForClass(ClientSchema);
