import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getIndex(): string {
    return this.userService.getIndex();
  }
  @Post()
  async getHello(): Promise<User[]> {
    return this.userService.getHello();
  }
}
