import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/User';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  addUser(@Body() body: User) {
    return this.usersService.addUser(body);
  }

  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }
}
