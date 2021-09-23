import * as env from 'env-var';

export const environment = {
  production: true,
  jwtSecret: env.get('NX_JWT_SECRET').required().asString(),
};
