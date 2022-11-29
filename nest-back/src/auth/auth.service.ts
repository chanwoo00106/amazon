import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { NewUserDto } from './dto/NewUserDto';
import { UserDto } from './dto/UserDto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  hash(password: string) {
    return bcrypt.hashSync(password, 10);
  }

  async register(user: Readonly<NewUserDto>) {
    const existUser = await this.userService.findByEmail(user.email);
    if (existUser) return 'Email taken';

    const hash = this.hash(user.password);

    const newUser = this.userService.create(user.name, user.email, hash);
    return newUser;
  }

  async doesPasswordMatch(password: string, hashedPassword: string) {
    return bcrypt.compareSync(password, hashedPassword);
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new ForbiddenException('Not found user');

    if (!this.doesPasswordMatch(password, user.password))
      throw new ForbiddenException('Not matched password');

    return user;
  }

  async login(userData: UserDto) {
    const user = await this.validateUser(userData.email, userData.password);

    const jwt = this.jwtService.sign({ user });
    return { token: jwt };
  }
}
