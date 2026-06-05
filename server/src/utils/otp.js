import otp from "otp-generator";

export const newOtp = otp.generate(6, {
  upperCaseAlphabets: false,
  lowerCaseAlphabets: false,
  specialChars: false,
});
