import { Request, Response } from 'express';

export const notFound = (req: Request, res: Response) => {
  const message = 'Resource not found.';
  res.status(404).json({ message });
};
