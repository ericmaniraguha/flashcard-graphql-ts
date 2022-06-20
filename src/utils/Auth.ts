import * as jwt from 'jsonwebtoken';

export const SECRET_KEY = process.env.JWT_SECRET || 'this-a-great-courses';

export interface AuthTokenPayload {
  userId: number;
}
export function decodeAuthHeader(authHeader: String): AuthTokenPayload {
  const token = authHeader.replace('Bearer ', '');
  if (!token) {
    throw new Error('No token found');
  }
  return jwt.verify(token, SECRET_KEY) as AuthTokenPayload;
}
