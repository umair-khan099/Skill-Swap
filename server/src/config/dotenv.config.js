import "dotenv/config";

const requiredEnv = [
  "PORT",
  "MONGO_URI",
  "CORS_ORIGIN",
  "ACCESS_TOKEN_KEY",
  "REFRESH_TOKEN_KEY",
  "ACCESS_TOKEN_EXP",
  "REFRESH_TOKEN_EXP",
  "REDIS_PASSWORD",
  "REDIS_PORT",
  "REDIS_HOST",
];

requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Required ENV missing: ${key}`);
  }
});

export const CONFIG = {
  PORT: process.env.PORT || "8000",

  MONGO_URI: process.env.MONGO_URI,

  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",

  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY,

  REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY,

  ACCESS_TOKEN_EXP: process.env.ACCESS_TOKEN_EXP,

  REFRESH_TOKEN_EXP: process.env.REFRESH_TOKEN_EXP,

  RESEND_API_KEY: process.env.RESEND_API_KEY,

  SMTP_EMAIL: process.env.SMTP_EMAIL,

  SMTP_PASSWORD: process.env.SMTP_PASSWORD,

  REDIS_PASSWORD: process.env.REDIS_PASSWORD,

  REDIS_HOST: process.env.REDIS_HOST,

  REDIS_PORT: process.env.REDIS_PORT,
};
