import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientDocument, ClientSchema } from '../schema/client.schema';
import { Model } from 'mongoose';
import { UserDocument, UsersSchema } from '../schema/users.schema';
import { MembersDocument, MembersSchema } from '../schema/members.schema';
import { MeetDocument, MeetSection } from '../schema/meet-section.schema';
import { ImageDocument, ImagesSchema } from '../schema/images.schema';
import { BlogDocument, BlogSchema } from '../schema/blog.schema';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(ClientSchema.name) private client: Model<ClientDocument>,
    @InjectModel(UsersSchema.name) private users: Model<UserDocument>,
    @InjectModel(MembersSchema.name)
    private members: Model<MembersDocument>,
    @InjectModel(MeetSection.name) private meet: Model<MeetDocument>,
    @InjectModel(ImagesSchema.name) private image: Model<ImageDocument>,
    @InjectModel(BlogSchema.name) private blog: Model<BlogDocument>,
  ) {}

  getClient() {
    return this.client.find().select('-_id').exec();
  }
  getUsers() {
    return this.users.find().select('-_id').exec();
  }
  getMembers() {
    return this.members.find().select('-_id').exec();
  }
  getAllMeets() {
    return this.meet.find().select('-_id').exec();
  }
  getALlImage() {
    return this.image.find().select('-_id').exec();
  }
  getALlBlog() {
    return this.blog.find().select('-_id').exec();
  }
}
