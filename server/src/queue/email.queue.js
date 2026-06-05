import { Queue } from "bullmq";
import { connection } from "../db/redis.db.js";

export const emailMQ = new Queue("email", {
  connection, 
  defaultJobOptions: {
    attempts: 6,
    backoff: {
      type: "exponential",
      delay: 5000,
    },
    removeOnComplete: true,
    removeOnFail: false,
  },
});
