import { Injectable } from '@nestjs/common';
import { User } from './entity/User';

@Injectable()
export class UsersService {
  users: User[] = [];

  addUser({ name, email, password }: User) {
    const user = new User(name, email, password);
    return this.users.push(user);
  }

  findAllUsers() {
    return this.users;
  }
}
