export const otpTemplate = (email, otp) => {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <title>Verify your email</title>
    <!--[if mso]> <style type="text/css">body, table, td, p, a { font-family: Arial, Helvetica, sans-serif !important; }</style> <![endif]-->
    <style type="text/css">
      @media only screen and (max-width: 560px) {
        .responsive-container {
          padding: 32px 24px !important;
        }
        .otp-code {
          font-size: 42px !important;
          letter-spacing: 6px !important;
        }
        .btn-text {
          padding-left: 32px !important;
          padding-right: 32px !important;
        }
        .social-icon {
          margin: 0 6px !important;
        }
      }
    </style>
  </head>
  <body
    style="margin:0; padding:0; background-color:#f5f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;"
  >
    <!-- preheader (hidden) -->
    <div style="display:none; overflow:hidden; line-height:1px; opacity:0; max-height:0; max-width:0;">
      Confirm your identity with the secure verification code inside — no action needed if you didn't request it.
      ‌​‍‎‏﻿‌​‍‎‏﻿‌​‍‎‏﻿‌​‍‎‏﻿‌​‍‎‏﻿‌​‍‎‏﻿
    </div>

    <!-- main email wrapper -->
    <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" bgcolor="#F5F5F7">
      <tr>
        <td align="center" style="padding: 40px 16px;">
          <!-- main container card -->
          <table
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            align="center"
            style="max-width: 560px; width: 100%; background-color: #ffffff; border: 1px solid #eaeef2; border-radius: 0px; box-shadow: 0 1px 2px rgba(0,0,0,0.02);"
          >
            <tr>
              <td class="responsive-container" style="padding: 48px 40px 52px 40px; background-color: #ffffff;">
                <!-- big title -->
                <h1
                  style="margin: 0 0 16px 0; padding: 0; font-size: 36px; font-weight: 600; color: #111111; letter-spacing: -0.3px; line-height: 1.2; text-align: left;"
                >
                  Verify your email
                </h1>

                <!-- greeting + description -->
                <p style="margin: 0 0 32px 0; padding: 0; font-size: 16px; line-height: 1.5; color: #4b5563;">
                  Hi ${email.split("@")[0]},<br />
                  We received a request to verify your email address. Use the secure code below to complete
                  verification.
                </p>

                <!-- OTP code section (minimal, large typography) -->
                <div style="margin-bottom: 28px;">
                  <p
                    style="margin: 0 0 10px 0; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 1.2px; color: #6c727a;"
                  >
                    Verification code
                  </p>
                  <div
                    style="background-color: #fafafc; border: 1px solid #eef2f5; padding: 24px 16px; text-align: center;"
                  >
                    <span
                      class="otp-code"
                      style="font-size: 52px; font-weight: 700; font-family: 'SF Mono', 'Menlo', monospace; letter-spacing: 10px; color: #000000; word-break: break-word;"
                      >${otp}</span
                    >
                  </div>
                </div>

                <!-- expiry info + helper -->
                <p style="margin: 0 0 24px 0; font-size: 14px; color: #6b7280; line-height: 1.4;">
                  ⏳ This code expires in <strong style="color:#111111;">15min</strong>. Enter it in the app
                  or website to confirm your identity.
                </p>

                <!-- primary CTA button (minimal black) -->
                <table
                  width="100%"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  style="margin-bottom: 24px;"
                >
                  <tr>
                    <td align="left">
                      <a
                        href="{{{verification_url}}}"
                        style="display: inline-block; background-color: #000000; color: #ffffff; font-size: 15px; font-weight: 500; text-decoration: none; padding: 14px 32px; border-radius: 6px; letter-spacing: 0.2px; text-align: center; border: 1px solid #000000; transition: none;"
                        >Verify email address →</a
                      >
                    </td>
                  </tr>
                </table>

                <!-- fallback link line -->
                <p
                  style="margin: 0 0 36px 0; font-size: 13px; color: #6c727a; line-height: 1.4; word-break: break-all;"
                >
                  Or copy and paste this link:
                  <a
                    href="{{{verification_url}}}"
                    style="color: #111111; text-decoration: underline; text-underline-offset: 2px;"
                    >{{{verification_url}}}</a
                  >
                </p>

                <!-- subtle divider -->
                <hr style="width:100%; border: none; border-top: 1px solid #e6e9ed; margin: 16px 0 32px 0;" />

                <!-- security note (no cartoon, clean) -->
                <p style="margin: 0 0 10px 0; font-size: 14px; color: #4b5563; line-height: 1.45;">
                  If you didn't request this verification, you can safely ignore this email. Your account remains secure
                  and no changes will be made.
                </p>
                <p style="margin: 0 0 32px 0; font-size: 14px; color: #4b5563; line-height: 1.45;">
                  Never share this OTP with anyone. Our support team will never ask for your verification code.
                </p>

                <!-- footer with company details + social icons (minimal, professional) -->
                <hr style="width:100%; border: none; border-top: 1px solid #e6e9ed; margin: 8px 0 28px 0;" />

                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td style="padding-bottom: 18px;">
                      <p style="margin: 0 0 6px 0; font-size: 12px; color: #9ca3af; line-height: 1.5;">
                        © 2026 Learnmize pvt ltd · Mumbai, Maharashtra
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style="padding-top: 4px;">
                      <!-- social icons row (minimal monochrome SVG) -->
                      <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">
                        <!-- Twitter / X -->
                        <a
                          href="#"
                          style="display: inline-flex; align-items: center; justify-content: center; text-decoration: none; opacity: 0.75; transition: opacity 0.1s ease;"
                          aria-label="Twitter"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                              fill="#2C2E33"
                            />
                          </svg>
                        </a>
                        <!-- LinkedIn -->
                        <a
                          href="#"
                          style="display: inline-flex; align-items: center; justify-content: center; text-decoration: none; opacity: 0.75;"
                          aria-label="LinkedIn"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.205 0 22.225 0z"
                              fill="#2C2E33"
                            />
                          </svg>
                        </a>
                        <!-- Instagram -->
                        <a
                          href="#"
                          style="display: inline-flex; align-items: center; justify-content: center; text-decoration: none; opacity: 0.75;"
                          aria-label="Instagram"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.014 7.052.072 4.813.164 3.045.804 1.924 1.925.804 3.045.164 4.813.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.092 2.239.732 4.007 1.852 5.128 1.121 1.121 2.889 1.76 5.128 1.852 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c2.239-.092 4.007-.732 5.128-1.852 1.121-1.121 1.76-2.889 1.852-5.128.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.092-2.239-.732-4.007-1.852-5.128-1.121-1.121-2.889-1.76-5.128-1.852C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                              fill="#2C2E33"
                            />
                          </svg>
                        </a>
                        <!-- GitHub -->
                        <a
                          href="#"
                          style="display: inline-flex; align-items: center; justify-content: center; text-decoration: none; opacity: 0.75;"
                          aria-label="GitHub"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              fill="#2C2E33"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- tiny spacer for bottom -->
                <p style="margin: 28px 0 0 0; font-size: 11px; color: #b9c1c9; line-height: 1.4; text-align: left;">
                  This is an automated message. If you need assistance, contact our support team.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
};
