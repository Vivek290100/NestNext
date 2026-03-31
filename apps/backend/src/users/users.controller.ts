import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // 🔒 Protected route (requires JWT)
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}