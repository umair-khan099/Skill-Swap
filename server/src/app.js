import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import hpp from "hpp";
import compression from "compression";
import cookieParser from "cookie-parser";

import indexRoute from "./routes/index.route.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import corsOptions from "./constants/corsOptions.js";

// app
export const app = express();

// security middlewares
app.use(helmet());
app.use(hpp());

// utility middlewares
app.use(compression());
app.use(morgan("dev"));
app.use(cookieParser());

// parsers
app.use(express.json());

// cors
app.use(corsOptions);

// routes
app.use("/api/v1", indexRoute);

// global error handler
app.use(errorMiddleware);