import app from './app';
import { CONFIG } from './shared/config';

app.listen(CONFIG.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT ${CONFIG.PORT}`);
});
