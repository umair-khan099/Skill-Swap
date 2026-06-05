import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import hpp from "hpp";
import compression from "compression";
import indexRoute from "./routes/index.route";

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


app.use("/api/v1",indexRoute);

app.use(errorMiddleware);
