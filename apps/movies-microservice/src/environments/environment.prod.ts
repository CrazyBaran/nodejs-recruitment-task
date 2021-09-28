import * as env from 'env-var';

export const environment = {
  production: true,
  jwtSecret: env.get('NX_JWT_SECRET').required().asString(),
  jwtIssuer: env.get('NX_JWT_ISS').required().asString(),
};
