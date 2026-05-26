import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

const RegisterForm = ({ step, setStep }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    otp: "",
    bio: "",
    skillLevel: "Beginner",
  });
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.userName.trim() || !formData.email.trim() || !formData.password) {
      setError("All fields are required");
      return;
    }

    if (formData.userName.length < 3 || formData.userName.length > 20) {
      setError("Username must be between 3 and 20 characters");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
      alert("A verification code 123456 has been sent to your email.");
    }, 800);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.otp !== "123456") {
      setError("Invalid verification code. Enter 123456 to verify.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("profile");
    }, 800);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 800);
  };

  const handleSkip = () => {
    navigate("/home");
  };

  const interestsList = [
    "Development",
    "Design",
    "Music",
    "Languages",
    "Marketing",
    "Photography",
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {step === "signup" && (
        <form onSubmit={handleSignupSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
              Username
            </label>
            <Input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              placeholder="e.g. johndoe01"
              autoFocus
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@domain.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
              Password
            </label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
            />
          </div>

          {error && <span className="text-[11px] text-red-500 font-medium">{error}</span>}

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-10 bg-premium-text text-white font-medium text-xs rounded-none hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center"
          >
            {loading ? "Checking..." : "Sign Up"}
          </Button>
        </form>
      )}

      {step === "otp" && (
        <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
          <div className="text-center mb-2">
            <p className="text-xs text-premium-text/60">
              Please enter the 6-digit code sent to <strong className="text-premium-text">{formData.email}</strong>.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
              Verification Code
            </label>
            <Input
              type="text"
              name="otp"
              maxLength={6}
              value={formData.otp}
              onChange={handleInputChange}
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
            {loading ? "Verifying..." : "Verify Code"}
          </Button>
        </form>
      )}

      {step === "profile" && (
        <form onSubmit={handleProfileSubmit} className="flex flex-col gap-5">

          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
              Interests (Select multiple)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {interestsList.map((interest) => {
                const active = selectedInterests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    className={`h-9 border text-xs px-3 rounded-none text-left transition-colors font-medium flex items-center justify-between cursor-pointer ${
                      active
                        ? "bg-premium-text text-white border-premium-text"
                        : "bg-white border-premium-text/15 text-premium-text/70 hover:bg-premium-text/5"
                    }`}
                  >
                    {interest}
                    {active && <span className="text-[10px]">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
              Skill Level
            </label>
            <select
              name="skillLevel"
              value={formData.skillLevel}
              onChange={handleInputChange}
              className="flex h-9 w-full rounded-none border border-premium-text/15 bg-white px-3 py-1.5 text-xs text-premium-text shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-all focus:border-premium-text focus:outline-none focus:ring-1 focus:ring-premium-text"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] uppercase font-bold tracking-widest text-premium-text/40">
              Bio
            </label>
            <textarea
              name="bio"
              rows={2}
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="A short note about yourself..."
              className="flex w-full rounded-none border border-premium-text/15 bg-white px-3 py-2 text-xs text-premium-text shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-all placeholder:text-premium-text/30 focus:border-premium-text focus:outline-none focus:ring-1 focus:ring-premium-text"
            />
          </div>

          <div className="flex gap-3 mt-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleSkip}
              className="flex-1 h-10 border-premium-text/15 text-premium-text/70 rounded-none hover:bg-premium-text/5 cursor-pointer font-medium text-xs flex items-center justify-center"
            >
              Skip
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 h-10 bg-premium-text text-white font-medium text-xs rounded-none hover:opacity-85 transition-opacity cursor-pointer flex items-center justify-center"
            >
              {loading ? "Saving..." : "Save & Continue"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
