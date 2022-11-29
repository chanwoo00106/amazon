import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  @UseGuards(JwtGuard)
  @Get()
  hello() {
    return 'hello!';
  }
}
