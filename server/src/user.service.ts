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
  getHello(): string {
    // console.log(this.userRepository.find().resolve());
    return 'Hello World!' + this.userRepository.find();
  }
  getIndex(): string {
    return `not allowed to login`;
  }
}
