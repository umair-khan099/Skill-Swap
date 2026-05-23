import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

const MOCK_USERS = ["admin", "johndoe01", "learnmize", "user"];

const LoginForm = ({ onForgotPassword }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState("username");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!userName.trim()) {
      setError("Username is required");
      return;
    }
    const exists = MOCK_USERS.includes(userName.trim().toLowerCase());
    if (!exists) {
      setError("Username not found");
      return;
    }
    setStep("password");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!password) {
      setError("Password is required");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 800);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {step === "username" ? (
        <form onSubmit={handleUsernameSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
              Username
            </label>
            <Input
              type="text"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="e.g. johndoe01"
              autoFocus
              className={error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
            />
            {error && <span className="text-[11px] text-red-500 font-medium">{error}</span>}
          </div>
          <Button
            type="submit"
            className="w-full h-10 bg-premium-text text-white font-medium text-xs rounded-none hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center"
          >
            Continue
          </Button>
        </form>
      ) : (
        <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
                Password
              </label>
              <button
                type="button"
                onClick={() => setStep("username")}
                className="text-[10px] uppercase font-bold tracking-widest text-premium-text/45 hover:text-premium-text transition-colors"
              >
                Change User
              </button>
            </div>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoFocus
              className={error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}
            />
            {error && <span className="text-[11px] text-red-500 font-medium">{error}</span>}
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-xs text-premium-text/60 hover:text-premium-text font-medium transition-colors"
            >
              Forgot password?
            </button>
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-10 bg-premium-text text-white font-medium text-xs rounded-none hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
