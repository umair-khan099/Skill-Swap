import nodemailer from "nodemailer";
import { CONFIG } from "../../config/dotenv.config.js";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: CONFIG.SMTP_EMAIL,
    pass: CONFIG.SMTP_PASSWORD,
  },
});