import { Request, Response } from 'express';
import User, { IUser } from '@models/User';

export const getUser = (req: Request, res: Response) => {
  const user: IUser[] = User;
  res.json({ user });
};
