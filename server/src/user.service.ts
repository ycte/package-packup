import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): string {
    return 'Hello World!';
  }
  getIndex(): string {
    return `not allowed to login`;
  }
}
