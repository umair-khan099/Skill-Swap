import { Link } from "react-router";
import { ArrowLeft, Compass, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen bg-premium-bg text-premium-text flex flex-col items-center justify-center px-6 selection:bg-premium-text selection:text-premium-bg overflow-x-hidden antialiased select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="relative max-w-md w-full text-center space-y-8 bg-white border border-[#0A0A0F]/5 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.015)] backdrop-blur-sm z-10 animate-fade-in">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-premium-bg border border-[#0A0A0F]/5 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
          <AlertCircle className="w-8 h-8 text-premium-text/70" />
        </div>

        <div className="space-y-3">
          <span className="text-[10px] font-bold tracking-[0.25em] text-premium-text/40 uppercase block">Error Code 404</span>
          <h1 className="text-3xl font-extrabold tracking-tight">Lost in the Stack</h1>
          <p className="text-xs text-premium-text/50 leading-relaxed">
            The page you are looking for does not exist or has been relocated to another namespace.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Link to="/home">
            <Button className="w-full h-11 rounded-xl bg-premium-text text-white hover:opacity-90 flex items-center justify-center gap-2 shadow-sm font-semibold transition-all">
              <ArrowLeft className="w-4 h-4" />
              Return Dashboard
            </Button>
          </Link>
          <Link to="/home/explore">
            <Button variant="outline" className="w-full h-11 rounded-xl border-[#0A0A0F]/10 hover:bg-premium-bg flex items-center justify-center gap-2 font-semibold transition-all">
              <Compass className="w-4 h-4" />
              Explore Skills
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="mt-8 text-center z-10">
        <span className="text-[10px] font-semibold text-premium-text/30 tracking-wider">
          Learnmize Peer Exchange Network
        </span>
      </div>
    </div>
  );
};

export default NotFound;