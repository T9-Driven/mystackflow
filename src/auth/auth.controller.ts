import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthSigninDTO } from './dto/auth-signin.dto';
import { AuthService } from './auth.service';
import { AuthSignupDTO } from './dto/auth-signup.dto';
import { User } from '@prisma/client';
import { AuthGuard } from './authGuard/auth.guard';
import { UserRequest } from './decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('signin')
  async signin(@Body() body: AuthSigninDTO) {
    return this.authService.signin(body);
  }

  @Post('signup')
  async signup(@Body() body: AuthSignupDTO) {
    return this.authService.signup(body);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async userLogged(@UserRequest() user: User) {
    return user;
  }
}
