import { Award, Zap, Code, ShieldCheck, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const profileInfo = {
    name: "johndoe01 Choudhary",
    role: "Full-Stack Developer",
    location: "India",
    xp: 1250,
    skillsToTeach: ["React", "Node.js", "Express", "Tailwind CSS"],
    skillsToLearn: ["UI/UX Design", "Figma Auto-layout", "System Design"],
    bio: "Passionate about building functional, high-performance web applications and mentoring peers. Looking to level up my visual design skills.",
  };

  return (
    <div className="w-full min-h-screen bg-premium-bg text-premium-text p-6 md:p-10 select-none">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white border border-premium-text/5 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)]">
          <div className="w-24 h-24 rounded-2xl bg-premium-text text-white font-bold text-3xl flex items-center justify-center border border-premium-text/5 shrink-0 shadow-sm">
            {profileInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div className="flex-1 min-w-0 text-center sm:text-left space-y-4">
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h1 className="text-2xl font-bold tracking-tight">
                  {profileInfo.name}
                </h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-600 border border-emerald-500/10 self-center">
                  <ShieldCheck className="w-3 h-3" /> Verified Member
                </span>
              </div>
              <p className="text-sm text-premium-text/60">{profileInfo.role}</p>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-premium-text/45 pt-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{profileInfo.location}</span>
              </div>
            </div>
            <p className="text-xs text-premium-text/50 leading-relaxed max-w-xl">
              {profileInfo.bio}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-premium-text/5 p-5 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-premium-bg flex items-center justify-center">
              <Zap className="w-5 h-5 text-premium-text" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-premium-text/45 uppercase tracking-wider block">
                XP Level
              </span>
              <span className="text-sm font-bold">{profileInfo.xp} XP</span>
            </div>
          </div>
          <div className="bg-white border border-premium-text/5 p-5 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-premium-bg flex items-center justify-center">
              <Award className="w-5 h-5 text-premium-text" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-premium-text/45 uppercase tracking-wider block">
                Badges
              </span>
              <span className="text-sm font-bold">5 Earned</span>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-white border border-premium-text/5 p-5 rounded-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-premium-bg flex items-center justify-center">
              <Mail className="w-5 h-5 text-premium-text" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-premium-text/45 uppercase tracking-wider block">
                Swaps
              </span>
              <span className="text-sm font-bold">12 Completed</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-premium-text/5 rounded-2xl p-5 space-y-4">
            <h2 className="text-sm font-bold border-b border-premium-text/5 pb-2.5 flex items-center gap-1.5">
              <Code className="w-4 h-4 text-premium-text/60" /> Skills I Can
              Teach
            </h2>
            <div className="flex flex-wrap gap-2">
              {profileInfo.skillsToTeach.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs font-semibold bg-premium-bg border border-premium-text/5 rounded-xl hover:border-premium-text/20 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-premium-text/5 rounded-2xl p-5 space-y-4">
            <h2 className="text-sm font-bold border-b border-premium-text/5 pb-2.5 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-premium-text/60" /> Skills I Want to
              Learn
            </h2>
            <div className="flex flex-wrap gap-2">
              {profileInfo.skillsToLearn.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-xs font-semibold bg-premium-bg border border-premium-text/5 rounded-xl hover:border-premium-text/20 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            className="rounded-xl px-5 border-premium-text/10"
          >
            Edit Profile
          </Button>
          <Button className="rounded-xl px-5 bg-premium-text text-white hover:bg-premium-text/90">
            Share Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
