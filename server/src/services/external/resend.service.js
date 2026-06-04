import resend from "resend";
import { CONFIG } from "../../config/dotenv.config.js";

export default new resend(CONFIG.RESEND_API_KEY);
