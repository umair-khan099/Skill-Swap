import { CONFIG } from "./src/config/dotenv.config.js";
import { app } from "./src/app.js";
import { dbConnect } from "./src/db/dbConnect.js";

const startServer = (async () => {
  await dbConnect();
  app.listen(CONFIG.PORT, () => {
    console.log(`Server is Runing at PORT :: ${CONFIG.PORT}`);
  });
})();
