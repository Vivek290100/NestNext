// C:\Users\vivek_laxvnt1\Desktop\projects\NestNext\apps\backend\src\auth\jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => req?.cookies?.token,
      ]),
      secretOrKey: 'secretKey', // Use env variable in production!
      ignoreExpiration: false,
    });
  }

  async validate(payload: any) {
    return payload;
  }
}