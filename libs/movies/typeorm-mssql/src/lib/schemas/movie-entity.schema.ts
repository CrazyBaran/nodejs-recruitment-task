import { EntitySchema } from 'typeorm';
import { MovieEntity } from '@nodejs-recruitment-task/movies/domain';
export const MovieEntitySchema = new EntitySchema<MovieEntity>({
  name: 'MovieEntity',
  tableName: 'movies',
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: true,
    },
    title: {
      type: 'varchar',
      nullable: false,
    },
    genre: {
      type: 'varchar',
    },
    director: {
      type: 'varchar',
    },
    released: {
      type: Date,
    },
    createdAt: {
      type: Date,
      createDate: true,
    },
  },
});
