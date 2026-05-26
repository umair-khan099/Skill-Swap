import { useNavigate } from "react-router";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-premium-bg text-premium-text flex items-center justify-center py-16 px-6 select-none selection:bg-premium-text selection:text-premium-bg">
      <div className="max-w-105 w-full bg-white border border-premium-text/5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] p-10 flex flex-col gap-8 transition-all duration-300">
        
        <div className="flex justify-center items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-9 h-9 flex items-center justify-center bg-premium-bg rounded-lg border border-premium-text/5 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-premium-text"
            >
              <path d="M4 12h16" />
              <path d="M12 4v16" />
              <circle cx="12" cy="12" r="3" fill="#0A0A0F" />
            </svg>
          </div>
          
          <div className="flex flex-col items-left leading-none">
            <span className="font-semibold text-lg tracking-tight text-premium-text">
              Learnmize
            </span>
            <span className="text-[8px] font-bold tracking-[0.2em] text-premium-text/45 uppercase mt-0.5">
              Peer Exchange
            </span>
          </div>
        </div>

        <div>
          {children}
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;