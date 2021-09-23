import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '../contracts/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('NX_JWT_SECRET'),
      issuer: configService.get<string>('NX_JWT_ISS'),
    });
  }

  async validate(payload: JwtPayload) {
    return { userId: payload.userId, role: payload.role };
  }
}
