import { CONFIG } from "../config/dotenv.config.js";
import { otpTemplate } from "../templates/email.template.js";
import resend from "./external/resend.service.js";
import { transporter } from "./external/smtp.service.js";

export class EmailService {
  static async sendOTPByResend(email, otp) {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "OTP Verification",
      html: otpTemplate(email, otp),
    });
  }

  static async sendOTPBySMTP(email, otp) {
    await transporter.sendMail({
      from: CONFIG.SMTP_EMAIL,
      to: email,
      subject: "OTP Verification",
      html: otpTemplate(email, otp),
    });
  };
};
