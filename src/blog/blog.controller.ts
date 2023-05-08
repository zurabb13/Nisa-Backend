import { Controller, Get } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private blogServive: BlogService) {}

  @Get('client')
  client(): Promise<any> {
    return this.blogServive.getClient();
  }
  @Get('users')
  users(): Promise<any> {
    return this.blogServive.getUsers();
  }

  @Get('members')
  members(): Promise<any> {
    return this.blogServive.getMembers();
  }
  @Get('meet')
  meetSection(): Promise<any> {
    return this.blogServive.getAllMeets();
  }

  @Get('blog')
  getAllBlog(): Promise<any> {
    return this.blogServive.getALlBlog();
  }
  @Get('image')
  getImage(): Promise<any> {
    return this.blogServive.getALlImage();
  }
}
