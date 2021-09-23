import * as env from 'env-var';

export const environment = {
  production: false,
  jwtSecret: env.get('NX_JWT_SECRET').required().asString(),
};
