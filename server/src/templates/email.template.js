// TODO: provide actual OTP email template implementation
export const otpTemplate = (email, otp) => {
  return `
    <div>
      <h2>OTP Verification</h2>
      <p>Email: ${email}</p>
      <p>Your OTP is: <b>${otp}</b></p>
    </div>
  `;
};
