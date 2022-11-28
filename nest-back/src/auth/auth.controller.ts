import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NewUserDto } from './dto/NewUserDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() user: NewUserDto) {
    return this.authService.register(user);
  }
}
