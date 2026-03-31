// C:\Users\vivek_laxvnt1\Desktop\projects\NestNext\apps\backend\src\common\guards\jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}