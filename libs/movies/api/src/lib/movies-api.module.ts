import { Module } from '@nestjs/common';
import { MoviesController } from './controllers/movies.controller';

@Module({
  controllers: [MoviesController],
  providers: [],
  exports: [],
})
export class MoviesApiModule {}
