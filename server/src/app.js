import express from "express";
import morgan from "morgan";
import cors from "cors";
import { CONFIG } from "./config/dotenv.config.js";
import { User } from "./model/user.model.js";

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


app.post("/register", async (req, res) => {
  const { userName, fullName, password, email } = req.body;
  const response = await User.create({ userName, fullName, password, email });
  res.json({ response });
});