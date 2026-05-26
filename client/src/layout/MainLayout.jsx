import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { 
  Home, 
  Compass, 
  MessageSquare, 
  GraduationCap, 
  Library, 
  PenTool, 
  User, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigationItems = [
    { name: "Home", path: "/home", icon: Home, end: true },
    { name: "Explore", path: "/home/explore", icon: Compass },
    { name: "Messages", path: "/home/messages", icon: MessageSquare },
    { name: "Courses", path: "/home/courses", icon: GraduationCap },
    { name: "Library", path: "/home/library", icon: Library },
    { name: "Publish Post", path: "/home/publish-post", icon: PenTool },
    { name: "Profile", path: "/home/profile", icon: User }
  ];

  return (
    <div className="w-full min-h-screen bg-premium-bg text-premium-text flex antialiased select-none">
      <aside 
        className={cn(
          "h-screen sticky top-0 bg-white border-r border-premium-text/5 flex flex-col justify-between transition-all duration-300 ease-in-out shrink-0 z-40",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className="flex flex-col grow pt-6">
          <div className={cn(
            "flex items-center gap-3 px-6 mb-8 overflow-hidden transition-all duration-300",
            isCollapsed ? "justify-center px-4" : "justify-start"
          )}>
            <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-premium-bg rounded-xl border border-premium-text/5 shadow-sm">
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
            {!isCollapsed && (
              <div className="flex flex-col leading-none animate-fade-in">
                <span className="font-bold text-sm tracking-tight text-premium-text">
                  Learnmize
                </span>
                <span className="text-[7px] font-bold tracking-[0.2em] text-premium-text/40 uppercase mt-0.5">
                  Peer Exchange
                </span>
              </div>
            )}
          </div>

          <nav className="flex-1 px-4 space-y-1.5">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) => cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold tracking-tight transition-all duration-200 group relative",
                    isCollapsed ? "justify-center" : "justify-start",
                    isActive 
                      ? "bg-premium-text text-white shadow-sm" 
                      : "text-premium-text/55 hover:bg-premium-bg hover:text-premium-text"
                  )}
                >
                  <Icon className={cn(
                    "w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-105"
                  )} />
                  {!isCollapsed && (
                    <span className="animate-fade-in">{item.name}</span>
                  )}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2.5 py-1 bg-premium-text text-white text-[10px] font-bold rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 shadow-md">
                      {item.name}
                    </div>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="p-4 flex justify-center">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full h-10 flex items-center justify-center bg-premium-bg hover:bg-premium-text hover:text-white rounded-xl border border-[#0A0A0F]/5 text-premium-text/60 shadow-sm transition-all duration-200 cursor-pointer"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button> 
        </div>
      </aside>

      <main className="flex-1 min-w-0 flex flex-col overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;