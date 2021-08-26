import app from './app';
import { PORT } from 'shared/config/';

app.listen(PORT, () => {
  console.log(`RUNNING SERVER ON PORT ${PORT}`);
});
