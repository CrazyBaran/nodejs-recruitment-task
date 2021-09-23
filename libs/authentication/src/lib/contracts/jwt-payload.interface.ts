export interface JwtPayload {
  readonly userId: number;
  readonly name: string;
  readonly role: string;
  readonly iat: number;
  readonly exp: number;
  readonly iss: string;
  readonly sub: string;
}
