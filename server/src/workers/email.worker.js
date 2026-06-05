import { Worker } from "bullmq";
import { EmailService } from "../services/email.service.js";
import { connection } from "../db/redis.db.js";
const worker = new Worker(
  "email",
  async (job) => {
    console.log("Sending verify otp in worker");
    try {
      if (job.name === "emailVerification") {
        console.log(job.data);
        const { email, otp } = job.data;
        await EmailService.sendOTPBySMTP(email, otp);
      };
    } catch (error) {
      throw new Error("Somthing went Wrong at email worker");
    }
  },
  { connection, concurrency: 5 },
);

worker.on("completed", (job) => console.log(`${job.id} is complited`));
worker.on("failed", (job, error) =>
  console.log(`${job.id} is failed , ${error}`),
);
