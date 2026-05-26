import { useState } from "react";
import { useNavigate } from "react-router";
import RegisterForm from "../components/RegisterForm";
import SocialLogin from "../components/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("signup");

  const getHeaderTitle = () => {
    if (step === "otp") return "Verify your email";
    if (step === "profile") return "Build your profile";
    return "Create your account";
  };

  const getHeaderSubtitle = () => {
    if (step === "otp") return "Enter the 6-digit confirmation code";
    if (step === "profile") return "Provide a few more details or skip";
    return "Enter your information to get started";
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-base font-semibold tracking-tight text-premium-text">
          {getHeaderTitle()}
        </h2>
        <p className="text-[11px] text-premium-text/50 mt-1">
          {getHeaderSubtitle()}
        </p>
      </div>

      <RegisterForm step={step} setStep={setStep} />

      {step === "signup" && (
        <>
          <div className="relative w-full flex items-center justify-center my-1">
            <div className="absolute w-full border-t border-premium-text/5" />
            <span className="relative bg-white px-3 text-[10px] uppercase font-bold tracking-widest text-premium-text/30 z-10">
              or continue with
            </span>
          </div>

          <SocialLogin />

          <div className="text-center mt-3">
            <button
              onClick={() => navigate("/login")}
              className="text-xs text-premium-text/50 hover:text-premium-text font-medium transition-colors cursor-pointer"
            >
              Already have an account? <span className="underline font-semibold">Sign in</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Register;