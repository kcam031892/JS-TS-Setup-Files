import path from 'path';
import express, { Request, Response } from 'express';
import userRoute from '@routes/user.route';
import { stringRequired } from '@constant/stringRequired';

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

app.use('/user', userRoute);

export default app;
