import { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

const ForgotPasswordForm = ({ onCancel, onSuccess }) => {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Email address is required");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
      alert("A reset code 123456 has been sent to your email.");
    }, 800);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (otp !== "123456") {
      setError("Invalid reset code. Enter 123456 to verify.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("reset");
    }, 800);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Password has been reset successfully. Please sign in again.");
      onSuccess();
    }, 800);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {step === "email" && (
        <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
              Email Address
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@domain.com"
              autoFocus
            />
          </div>

          {error && <span className="text-[11px] text-red-500 font-medium">{error}</span>}

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1 h-10 border-premium-text/15 text-premium-text/70 rounded-none hover:bg-premium-text/5 cursor-pointer font-medium text-xs flex items-center justify-center"
            >
              Back to Login
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 h-10 bg-premium-text text-white font-medium text-xs rounded-none hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center"
            >
              {loading ? "Sending..." : "Send Reset Code"}
            </Button>
          </div>
        </form>
      )}

      {step === "otp" && (
        <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
          <div className="text-center mb-2">
            <p className="text-xs text-premium-text/60">
              Please enter the 6-digit verification code sent to <strong className="text-premium-text">{email}</strong>.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
              Reset Code
            </label>
            <Input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="123456"
              autoFocus
              className="text-center tracking-[0.5em] font-bold text-lg"
            />
          </div>

          {error && <span className="text-[11px] text-red-500 font-medium">{error}</span>}

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-10 bg-premium-text text-white font-medium text-xs rounded-none hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center"
          >
            {loading ? "Verifying..." : "Verify & Continue"}
          </Button>
        </form>
      )}

      {step === "reset" && (
        <form onSubmit={handleResetSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
              New Password
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
              Confirm New Password
            </label>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {error && <span className="text-[11px] text-red-500 font-medium">{error}</span>}

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-10 bg-premium-text text-white font-medium text-xs rounded-none hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center"
          >
            {loading ? "Saving..." : "Reset Password"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordForm;
