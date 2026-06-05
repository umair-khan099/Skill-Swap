import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import compression from "compression";
import indexRoute from "./routes/index.route.js";
import { CONFIG } from "./config/dotenv.config.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

// app
export const app = express();

// cors origin
app.use(
  cors({
    origin: CONFIG.CORS_ORIGIN,
    credentials: true,
    methods: ["POST", "GET", "PATCH", "PUT", "DELETE"],
  }),
);

// attacks prevent global Middlewares

app.use(helmet());
app.use(hpp());
app.use(compression());

// middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", indexRoute);

app.use(errorMiddleware);
