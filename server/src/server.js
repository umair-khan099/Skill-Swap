import { CONFIG } from "./config/dotenv.config.js";
import { app } from "./app.js";
import { dbConnect } from "./db/dbConnect.js";
import "./workers/email.worker.js";
(async () => {
  await dbConnect();
  app.listen(CONFIG.PORT, () => {
    console.log(`Server is Runing at PORT :: ${CONFIG.PORT}`);
  });
})();
