import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post()
  addUser(@Body() body: CreateUserDTO) {
    return this.usersService.addUser(body);
  }

  @Get()
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  findUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findUserById(id);
  }
}
