import express from 'express';

import cors from 'cors';
import morgan from 'morgan';
import { NODE_ENV } from './shared/config';
import helmet from 'helmet';
import db from 'models';
const app = express();

if (NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

db.sequelize.sync();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get('/', async (req, res) => {
  const { User } = db;

  const getUsers = await User.findAll();
  res.json({
    message: 'Hello',
    user: getUsers,
  });
});

app.get('/create', async (req, res) => {
  const { User } = db;
  const getUsers = await User.create({
    first_name: 'mack',
  });

  res.status(400).json({ message: 'Succes', user: getUsers });
});

export default app;
