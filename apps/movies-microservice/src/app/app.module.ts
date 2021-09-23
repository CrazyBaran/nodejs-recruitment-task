import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AuthenticationModule } from '@nodejs-recruitment-task/authentication';
import { JwtAuthGuard } from '@nodejs-recruitment-task/authentication';
import { MoviesApiModule } from '@nodejs-recruitment-task/movies/api';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthenticationModule, MoviesApiModule],
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
