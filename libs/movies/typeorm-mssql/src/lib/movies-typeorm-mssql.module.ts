import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntitySchema } from './schemas/movie-entity.schema';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntitySchema])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class MoviesTypeormMssqlModule {}
