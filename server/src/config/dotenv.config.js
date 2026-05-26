import "dotenv/config"

const requiredEnv = [
  "MONGO_URI"
];

requiredEnv.forEach((key)=>{
  if(!process.env[key]){
    return console.log(`Required Env is missing: ${key}`)
  }
});

export const CONFIG = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_KEY,
  ACCESS_TOKEN_EXP: process.env.ACCESS_TOKEN_EXP,
  REFRESH_TOKEN_EXP: process.env.REFRESH_TOKEN_EXP,
};
