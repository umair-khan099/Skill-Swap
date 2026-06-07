import cors from "cors";
import { CONFIG } from "../config/dotenv.config.js";

const allowedOrigins = [
  CONFIG.CORS_ORIGIN,
  "http://localhost:5173",
];

const corsOptions = cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    callback(new Error("CORS policy violation"));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});

export default corsOptions;