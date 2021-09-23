import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtStrategy } from './strategies/jwt.strategies';

@Module({
  imports: [ConfigModule, PassportModule],
  providers: [JwtStrategy, JwtAuthGuard],
  exports: [JwtAuthGuard],
})
export class AuthenticationModule {}
