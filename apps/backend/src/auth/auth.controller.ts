import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

@Post('login')
async login(@Body() body, @Res() res: Response) {
  const result = await this.authService.login(body);

  res.cookie('token', result.token, {
    httpOnly: true,
    sameSite: 'lax',
  });

  return res.json({
    user: result.user,
  });
}

  @Post('register')
  async register(@Body() body) {
    return this.authService.register(body);
  }

@Post('logout')
logout(@Res() res: Response) {
  res.clearCookie('token');
  return res.json({ message: 'Logged out' });
}
}