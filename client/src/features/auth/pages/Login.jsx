import { useState } from "react";
import { useNavigate } from "react-router";
import LoginForm from "../components/LoginForm";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-base font-semibold tracking-tight text-premium-text">
          {isForgotPassword ? "Reset your password" : "Sign in to your account"}
        </h2>
        <p className="text-[11px] text-premium-text/50 mt-1">
          {isForgotPassword 
            ? "We will send you a verification code to reset it" 
            : "Enter your username to continue"}
        </p>
      </div>

      {isForgotPassword ? (
        <ForgotPasswordForm 
          onCancel={() => setIsForgotPassword(false)} 
          onSuccess={() => setIsForgotPassword(false)} 
        />
      ) : (
        <>
          <LoginForm onForgotPassword={() => setIsForgotPassword(true)} />
          
          <div className="relative w-full flex items-center justify-center my-1">
            <div className="absolute w-full border-t border-premium-text/5" />
            <span className="relative bg-white px-3 text-[10px] uppercase font-bold tracking-widest text-premium-text/30 z-10">
              or continue with
            </span>
          </div>

          <SocialLogin />

          <div className="text-center mt-3">
            <button
              onClick={() => navigate("/register")}
              className="text-xs text-premium-text/50 hover:text-premium-text font-medium transition-colors cursor-pointer"
            >
              New to Learnmize? <span className="underline font-semibold">Create an account</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;