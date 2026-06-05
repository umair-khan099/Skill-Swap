import nodemailer from "nodemailer";
import { CONFIG } from "../../config/dotenv.config.js";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, 
  secure: true,
  auth: {
    user: CONFIG.SMTP_EMAIL,
    pass: CONFIG.SMTP_PASSWORD,
  },
});
