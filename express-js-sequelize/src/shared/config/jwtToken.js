import jwt from 'jsonwebtoken';
import { CONFIG } from './';
export const jwtToken = (user) => {
  return jwt.sign({ user }, CONFIG.JWT_SECRET, { expiresIn: 10000000 });
};
