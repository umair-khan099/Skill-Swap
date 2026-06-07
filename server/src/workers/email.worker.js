import { Worker } from "bullmq";
import { EmailService } from "../services/email.service.js";
import { connection } from "../db/redis.db.js";
const worker = new Worker(
  "email",
  async (job) => {
    try {
      if (job.name === "emailVerification") {
        const { email, otp } = job.data;
        await EmailService.sendOTPBySMTP(email, otp);
      } else if (job.name === "forgotPassword") {
        const { email, resetLink } = job.data;
        await EmailService.sendResetPasswordEmail(email, resetLink);
      }
    } catch (error) {
      console.error("Worker error details:", error);
      throw new Error("Somthing went Wrong at email worker");
    }
  },
  { connection, concurrency: 5 },
);

worker.on("completed", (job) => console.log(`${job.id} is complited`));
worker.on("failed", (job, error) =>
  console.log(`${job.id} is failed , ${error}`),
);
