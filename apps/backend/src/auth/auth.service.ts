// C:\Users\vivek_laxvnt1\Desktop\projects\NestNext\apps\backend\src\auth\auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(data) {
    const hashed = await bcrypt.hash(data.password, 10);
    return this.usersService.create({ ...data, password: hashed });
  }

  async login(data) {
  const user = await this.usersService.findByEmail(data.email);

  if (!user || !(await bcrypt.compare(data.password, user.password))) {
    throw new UnauthorizedException('Invalid credentials');
  }

  return {
    token: this.jwtService.sign({ userId: user._id }),
    user: {
      name: user.name,
      email: user.email,
    },
  };
}
}