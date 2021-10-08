import app from './app';
import { CONFIG } from 'shared/config/';
import db from 'models';
import { createDatabase } from 'shared/utils/createDatabase';

app.listen(CONFIG.PORT, async () => {
  console.log(`RUNNING SERVER ON PORT ${CONFIG.PORT}`);
  await createDatabase();
  await db.sequelize.sync();
  console.log(`Databased sync`);
});
