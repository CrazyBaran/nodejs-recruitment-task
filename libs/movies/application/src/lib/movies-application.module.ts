import { Module } from '@nestjs/common';

import { MoviesTypeormMssqlModule } from '@nodejs-recruitment-task/movies/typeorm-mssql';
@Module({
  imports: [MoviesTypeormMssqlModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class MoviesApplicationModule {}
