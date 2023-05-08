import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema, ClientSchemaFactory } from '../schema/client.schema';
import { BlogService } from './blog.service';
import { UserSchemaFactory, UsersSchema } from '../schema/users.schema';
import { MembersSchema, MembersSchemaFactory } from '../schema/members.schema';
import {
  MeetSection,
  MeetSectionSchemaFactory,
} from '../schema/meet-section.schema';
import { BlogSchema, BlogSchemaFactory } from '../schema/blog.schema';
import { ImageSchemaFactory, ImagesSchema } from '../schema/images.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ClientSchema.name,
        schema: ClientSchemaFactory,
        collection: 'client',
      },
      {
        name: UsersSchema.name,
        schema: UserSchemaFactory,
        collection: 'users',
      },
      {
        name: MembersSchema.name,
        schema: MembersSchemaFactory,
        collection: 'members',
      },
      {
        name: MeetSection.name,
        schema: MeetSectionSchemaFactory,
        collection: 'meetsection',
      },
      {
        name: BlogSchema.name,
        schema: BlogSchemaFactory,
        collection: 'blogs',
      },
      {
        name: ImagesSchema.name,
        schema: ImageSchemaFactory,
        collection: 'images',
      },
    ]),
  ],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
