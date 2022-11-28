import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { NewUserDto } from './dto/NewUserDto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  hash(password: string) {
    return bcrypt.hashSync(password, 10);
  }

  async register(user: Readonly<NewUserDto>) {
    const existUser = await this.userService.findByEmail(user.email);

    if (!existUser) return 'Email taken';

    const hash = this.hash(user.password);

    const newUser = this.userService.create(user.name, user.email, hash);

    return newUser;
  }
}
