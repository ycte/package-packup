import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getIndex(): string {
    return this.userService.getIndex();
  }
  @Post()
  getHello(): string {
    return this.userService.getHello();
  }
}
