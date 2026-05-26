import { useState } from "react";
import {
  Zap,
  Crown,
  Bell,
  Settings,
  Star,
  MessageSquare,
  ArrowUpRight,
  Check,
  X,
  Sparkles,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const Home = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Aarav Sharma",
      skill: "Figma Auto-layout",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
      time: "10m ago",
    },
    {
      id: 2,
      name: "Emily Watson",
      skill: "System Design",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
      time: "2h ago",
    },
    {
      id: 3,
      name: "Sophia Vance",
      skill: "Next.js Animations",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
      time: "5h ago",
    },
    {
      id: 4,
      name: "Marcus Brody",
      skill: "Kubernetes",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
      time: "1d ago",
    },
  ]);

  const peers = [
    {
      name: "Siddharth Verma",
      role: "UI Designer",
      teaches: "Figma, Design Systems",
      wants: "React, Tailwind",
      rating: 4.9,
      location: "India",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120",
      bio: "Figma specialist looking to turn designs into production-ready React code.",
    },
    {
      name: "Sophia Vance",
      role: "Frontend Dev",
      teaches: "Next.js, Animations",
      wants: "SQL, Node.js",
      rating: 4.8,
      location: "United States",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
      bio: "Creating premium micro-interactions. Wanting to learn database optimization.",
    },
    {
      name: "Marcus Brody",
      role: "Software Architect",
      teaches: "AWS, Kubernetes",
      wants: "Three.js, WebGL",
      rating: 5.0,
      location: "Germany",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
      bio: "DevOps expert interested in building interactive 3D frontend layouts.",
    },
    {
      name: "Olivia Parker",
      role: "Backend Engineer",
      teaches: "Node.js, Redis",
      wants: "UI/UX",
      rating: 4.7,
      location: "Canada",
      avatar:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=120",
      bio: "Building scalable APIs and distributed systems for modern applications.",
    },
    {
      name: "Daniel Cruz",
      role: "Motion Designer",
      teaches: "Framer Motion",
      wants: "System Design",
      rating: 4.9,
      location: "Spain",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
      bio: "Passionate about immersive UI transitions and smooth interactions.",
    },
    {
      name: "Ava Mitchell",
      role: "Product Designer",
      teaches: "UX Research",
      wants: "React Native",
      rating: 4.8,
      location: "Australia",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=120",
      bio: "Designing human-centered products with clean interfaces.",
    },
  ];

  const handleAccept = (id) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  const handleDecline = (id) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));
  };

  return (
    <div className="h-screen overflow-hidden bg-premium-bg text-premium-text flex flex-col select-none">
      
      <header className="h-16 shrink-0 px-6 md:px-8 bg-white border-b border-premium-text/5 flex items-center justify-between sticky top-0 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
        
        <div className="flex items-center gap-2 bg-premium-bg px-3.5 py-1.5 rounded-xl border border-premium-text/5">
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="text-xs font-bold text-premium-text/80">
            1,250 XP
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button className="h-9 px-4 rounded-xl bg-premium-text text-white hover:opacity-90 flex items-center gap-1.5 text-xs font-semibold shadow-sm transition-all duration-200">
            <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            Upgrade Premium
          </Button>

          <button className="w-9 h-9 flex items-center justify-center bg-white hover:bg-premium-bg rounded-xl border border-premium-text/10 text-premium-text/75 relative transition-colors cursor-pointer">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 border border-white rounded-full" />
          </button>

          <button className="w-9 h-9 flex items-center justify-center bg-white hover:bg-premium-bg rounded-xl border border-premium-text/10 text-premium-text/75 transition-colors cursor-pointer">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </header>
      <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">

        <main className="flex-1 overflow-y-auto scrollbar-thin">
          
          <div className="p-6 md:p-8 lg:p-10 space-y-8">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1 text-[10px] font-bold text-premium-text/45 uppercase tracking-widest bg-white border border-premium-text/5 px-2.5 py-1 rounded-md">
                <Sparkles className="w-3 h-3 text-premium-text" />
                Member Hub
              </div>

              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-premium-text">
                Welcome back, johndoe01
              </h1>

              <p className="text-sm text-premium-text/50">
                Ready to learn something new? Here are custom matches based on
                your profile skills.
              </p>
            </div>

            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-premium-text/5 pb-3">
                <h2 className="text-lg font-extrabold tracking-tight">
                  Recommended Peers
                </h2>

                <span className="text-xs font-bold text-premium-text/60 hover:text-premium-text cursor-pointer transition-colors">
                  See All Matches
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {peers.map((peer, index) => (
                  <div
                    key={index}
                    className="bg-white border border-premium-text/5 rounded-3xl p-6 flex flex-col justify-between gap-5 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.025)] hover:border-premium-text/10 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      
                      <div className="flex items-start gap-4">
                        <img
                          src={peer.avatar}
                          alt={peer.name}
                          className="w-12 h-12 rounded-2xl object-cover border border-premium-text/5 shadow-sm"
                        />

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            
                            <h3 className="font-extrabold text-sm text-premium-text truncate">
                              {peer.name}
                            </h3>

                            <div className="flex items-center gap-0.5 text-xs font-bold text-amber-500">
                              <Star className="w-3.5 h-3.5 fill-current" />
                              <span>{peer.rating}</span>
                            </div>
                          </div>

                          <p className="text-xs text-premium-text/55">
                            {peer.role}
                          </p>

                          <div className="flex items-center gap-1 text-[10px] text-premium-text/40 font-semibold mt-1">
                            <MapPin className="w-3 h-3" />
                            <span>{peer.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-premium-text/60 leading-relaxed font-medium">
                        {peer.bio}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-premium-text/5">
                      
                      <div className="grid grid-cols-2 gap-2 text-[10px] font-bold">
                        
                        <div className="bg-premium-bg px-3 py-2 rounded-xl border border-premium-text/5">
                          <span className="text-premium-text/40 block mb-0.5 uppercase tracking-wider">
                            Teaches
                          </span>

                          <span className="text-premium-text/80 truncate block">
                            {peer.teaches}
                          </span>
                        </div>

                        <div className="bg-premium-bg px-3 py-2 rounded-xl border border-premium-text/5">
                          <span className="text-premium-text/40 block mb-0.5 uppercase tracking-wider">
                            Wants
                          </span>

                          <span className="text-premium-text/80 truncate block">
                            {peer.wants}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 pt-1">
                        
                        <Button
                          variant="outline"
                          className="w-full rounded-xl h-9 text-xs font-bold border-premium-text/10 flex items-center justify-center gap-1"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          Chat
                        </Button>

                        <Button className="w-full rounded-xl h-9 text-xs font-bold bg-premium-text text-white hover:bg-premium-text/90 flex items-center justify-center gap-0.5">
                          Swap Request
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <aside className="w-full lg:w-80 shrink-0 bg-white border-t lg:border-t-0 lg:border-l border-premium-text/5 overflow-y-auto scrollbar-none">
          
          <div className="p-6 md:p-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-premium-text/5 pb-3">
              
              <h2 className="text-sm font-bold uppercase tracking-wider text-premium-text/65">
                Teach Requests
              </h2>

              <span className="w-5 h-5 rounded-full bg-premium-bg border border-premium-text/5 text-[10px] font-bold text-premium-text/65 flex items-center justify-center">
                {requests.length}
              </span>
            </div>

            <div className="space-y-4">
              
              {requests.length === 0 ? (
                <div className="py-10 text-center space-y-2">
                  
                  <p className="text-xs font-bold text-premium-text/30">
                    No pending requests
                  </p>

                  <p className="text-[10px] text-premium-text/45 px-4 leading-relaxed">
                    Go to explore and offer to teach other users to get
                    requests.
                  </p>
                </div>
              ) : (
                requests.map((req) => (
                  <div
                    key={req.id}
                    className="bg-premium-bg border border-premium-text/5 rounded-2xl p-4 space-y-3.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]"
                  >
                    <div className="flex items-center gap-3">
                      
                      <img
                        src={req.avatar}
                        alt={req.name}
                        className="w-9 h-9 rounded-xl object-cover border border-premium-text/5"
                      />

                      <div className="min-w-0 flex-1">
                        
                        <h3 className="font-extrabold text-xs text-premium-text truncate">
                          {req.name}
                        </h3>

                        <p className="text-[10px] text-premium-text/45 mt-0.5">
                          {req.time}
                        </p>
                      </div>
                    </div>

                    <div className="text-[11px] font-medium text-premium-text/60 leading-normal">
                      wants to learn{" "}
                      <span className="font-bold text-premium-text">
                        {req.skill}
                      </span>{" "}
                      from you.
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      
                      <Button
                        variant="outline"
                        onClick={() => handleDecline(req.id)}
                        className="h-8 rounded-lg text-xs font-bold border-premium-text/10 text-premium-text/65 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 transition-colors flex items-center justify-center gap-1"
                      >
                        <X className="w-3.5 h-3.5" />
                        Decline
                      </Button>

                      <Button
                        onClick={() => handleAccept(req.id)}
                        className="h-8 rounded-lg text-xs font-bold bg-premium-text text-white hover:bg-premium-text/90 flex items-center justify-center gap-1"
                      >
                        <Check className="w-3.5 h-3.5" />
                        Accept
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;