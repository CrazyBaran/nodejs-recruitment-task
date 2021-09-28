import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AuthenticationModule } from '@nodejs-recruitment-task/authentication';
import { JwtAuthGuard } from '@nodejs-recruitment-task/authentication';
import { MoviesApiModule } from '@nodejs-recruitment-task/movies/api';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { environment } from '../environments/environment';

@Module({
  imports: [
    AuthenticationModule,
    ConfigModule.forRoot({
      load: [(): Record<string, unknown> => environment],
    }),
    MoviesApiModule /*TypeOrmModule.forRoot({})*/,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
