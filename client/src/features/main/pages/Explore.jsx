import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Compass,
  Star,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "Design",
    "Development",
    "Marketing",
    "Business",
    "Photography",
    "Music",
    "AI",
    "DevOps",
  ];

  const featuredSkills = [
    {
      title: "React & Next.js Pro",
      teacher: "Sophia Vance",
      category: "Development",
      rating: 4.9,
      students: 124,
      xp: 450,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
    },
    {
      title: "UI/UX Design Systems",
      teacher: "Marcus Brody",
      category: "Design",
      rating: 4.8,
      students: 98,
      xp: 400,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
    },
    {
      title: "Brand Identity Design",
      teacher: "Elena Rostova",
      category: "Design",
      rating: 5.0,
      students: 86,
      xp: 500,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120",
    },
    {
      title: "Python Machine Learning",
      teacher: "Arjun Mehta",
      category: "Development",
      rating: 4.7,
      students: 215,
      xp: 350,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
    },
    {
      title: "Kubernetes Production Setup",
      teacher: "Daniel Cruz",
      category: "DevOps",
      rating: 4.9,
      students: 178,
      xp: 550,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120",
    },
    {
      title: "Motion UI with Framer",
      teacher: "Olivia Parker",
      category: "Design",
      rating: 4.8,
      students: 140,
      xp: 390,
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=120",
    },
  ];

  return (
    <div className="h-screen overflow-hidden bg-premium-bg text-premium-text select-none">
      
      <div className="h-full overflow-y-auto scrollbar-thin">
        
        <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-10">
          
          <div className="space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-premium-text/5 shadow-sm text-xs font-medium text-premium-text/60">
              <Compass className="w-3.5 h-3.5" />
              <span>Discover Skills</span>
            </div>

            <div className="space-y-3">
              
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-premium-text">
                Explore Peer Expertise
              </h1>

              <p className="text-premium-text/60 max-w-2xl text-sm leading-relaxed">
                Search for mentors, courses, and skills you want to master,
                or discover learners who are searching for your expertise.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              
              <div className="bg-white border border-premium-text/5 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <div>
                  <p className="text-xs font-bold">2.4K+</p>
                  <p className="text-[10px] text-premium-text/45">
                    Active Learners
                  </p>
                </div>
              </div>

              <div className="bg-white border border-premium-text/5 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <div>
                  <p className="text-xs font-bold">840+</p>
                  <p className="text-[10px] text-premium-text/45">
                    Premium Skills
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            
            <div className="relative flex-1">
              
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-text/45" />

              <Input
                type="text"
                placeholder="Search skills, topics, or mentors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 border-premium-text/10 rounded-2xl bg-white shadow-sm"
              />
            </div>

            <Button
              variant="outline"
              className="h-12 rounded-2xl px-5 border-premium-text/10 flex items-center gap-2 bg-white hover:bg-premium-text hover:text-white transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-xs font-semibold bg-white border border-premium-text/5 rounded-xl hover:border-premium-text/25 hover:shadow-sm transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>

          <section className="space-y-6 pb-10">
            
            <div className="flex items-center justify-between border-b border-premium-text/5 pb-4">
              
              <h2 className="text-lg font-bold">
                Featured Mentors & Skills
              </h2>

              <span className="text-xs font-semibold text-premium-text/60 hover:text-premium-text cursor-pointer transition-colors">
                View All
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {featuredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white border border-premium-text/5 rounded-3xl p-5 flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-premium-text/10 transition-all duration-300 group cursor-pointer"
                >
                  <img
                    src={skill.image}
                    alt={skill.teacher}
                    className="w-16 h-16 rounded-2xl object-cover border border-premium-text/5"
                  />

                  <div className="flex-1 min-w-0 space-y-3">
                    
                    <div className="flex items-center justify-between">
                      
                      <span className="text-[10px] font-bold tracking-wider text-premium-text/45 uppercase bg-premium-bg px-2.5 py-1 rounded-full">
                        {skill.category}
                      </span>

                      <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500 bg-amber-500/5 px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{skill.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      
                      <h3 className="font-bold text-premium-text text-sm group-hover:text-premium-text/80 transition-colors">
                        {skill.title}
                      </h3>

                      <p className="text-xs text-premium-text/50">
                        by {skill.teacher} • {skill.students} learners
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      
                      <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                        +{skill.xp} XP Points
                      </span>

                      <button className="flex items-center gap-0.5 text-xs font-bold text-premium-text group-hover:translate-x-0.5 transition-transform">
                        Learn
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Explore;