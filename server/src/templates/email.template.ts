export const otpTemplate = (email: string, otp: number) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>OTP Verification</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
  
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 0;">
        
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;padding:40px;">
          
          <tr>
            <td align="center">
              <h1 style="margin:0;color:#111827;">
                Verify Your Account
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding-top:24px;color:#374151;font-size:16px;">
              Hi ${email.split('@')[0]},
            </td>
          </tr>

          <tr>
            <td style="padding-top:16px;color:#374151;font-size:16px;line-height:1.6;">
              Use the OTP below to verify your account.
              This OTP will expire in 10 minutes.
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:32px 0;">
              <div
                style="
                  display:inline-block;
                  font-size:32px;
                  font-weight:bold;
                  letter-spacing:8px;
                  padding:16px 32px;
                  border-radius:8px;
                  background:#f3f4f6;
                  color:#111827;
                "
              >
                ${otp}
              </div>
            </td>
          </tr>

          <tr>
            <td style="color:#6b7280;font-size:14px;line-height:1.6;">
              If you did not request this verification,
              you can safely ignore this email.
            </td>
          </tr>

          <tr>
            <td style="padding-top:32px;color:#6b7280;font-size:14px;">
              Thanks,<br />
              Your Team
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

