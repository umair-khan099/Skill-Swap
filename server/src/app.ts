import express from "express";
import morgan from "morgan";
import cors from "cors";
import { CONFIG } from "./config/dotenv.config.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

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

// middlewares
app.use(express.json());
app.use(morgan("dev"));

import authRouter from "./routes/auth.route.js";

app.use("/api/v1/auth", authRouter);

app.use(errorMiddleware);
