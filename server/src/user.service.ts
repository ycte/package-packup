import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async getHello(): Promise<User[]> {
    const value = await this.userRepository.find();
    // console.log(value);
    return value;
  }
  getIndex(): string {
    return `not allowed to login`;
  }
}
