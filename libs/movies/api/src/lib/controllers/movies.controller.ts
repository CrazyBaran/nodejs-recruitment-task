import { Controller, Get } from '@nestjs/common';

import { MovieDto } from '@nodejs-recruitment-task/movies/contracts';

@Controller('movies')
export class MoviesController {
  @Get()
  public list(): Promise<MovieDto[]> {
    return Promise.resolve([]);
  }
}
