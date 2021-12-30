import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

app.get('/', (_, res) => {
  res.status(400).send('Hello World!');
});

export default app;
