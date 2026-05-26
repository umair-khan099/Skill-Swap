import {
  GraduationCap,
  PlayCircle,
  BookOpen,
  Clock,
  ArrowRight,
  Trophy,
  Flame,
  Star,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const Courses = () => {
  const ongoingCourses = [
    {
      title: "Advanced Framer Motion for React",
      progress: 65,
      lectures: "12/18",
      time: "2.5h left",
      category: "Design",
      instructor: "Sophia Vance",
    },
    {
      title: "Node.js Microservices Architecture",
      progress: 30,
      lectures: "4/15",
      time: "6h left",
      category: "Development",
      instructor: "Alex River",
    },
    {
      title: "Kubernetes for Production Apps",
      progress: 82,
      lectures: "14/17",
      time: "1h left",
      category: "DevOps",
      instructor: "Marcus Brody",
    },
  ];

  const popularCourses = [
    {
      title: "UI Design Principles & Figma Mastery",
      rating: "4.9 (42 reviews)",
      duration: "8 hours",
      category: "Design",
      level: "Beginner",
    },
    {
      title: "Next.js 15 Server Components Guide",
      rating: "4.8 (89 reviews)",
      duration: "10 hours",
      category: "Development",
      level: "Intermediate",
    },
    {
      title: "Tailwind CSS Advanced Layout Techniques",
      rating: "5.0 (15 reviews)",
      duration: "4 hours",
      category: "Design",
      level: "Advanced",
    },
    {
      title: "Redis & Queue Systems Deep Dive",
      rating: "4.7 (58 reviews)",
      duration: "7 hours",
      category: "Backend",
      level: "Intermediate",
    },
  ];

  return (
    <div className="h-screen overflow-hidden bg-premium-bg text-premium-text select-none">
      
      <div className="h-full overflow-y-auto scrollbar-thin">
        
        <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-10">
          
          {/* HERO */}
          <div className="space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-premium-text/5 shadow-sm text-xs font-medium text-premium-text/60">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Interactive Learning</span>
            </div>

            <div className="space-y-3">
              
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-premium-text">
                My Courses & Path
              </h1>

              <p className="text-premium-text/60 max-w-2xl text-sm leading-relaxed">
                Continue learning from peer mentors, track your progress,
                and unlock advanced exchange paths tailored to your skills.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              
              <div className="bg-white border border-premium-text/5 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
                <Flame className="w-4 h-4 text-orange-500" />
                <div>
                  <p className="text-xs font-bold">12 Day Streak</p>
                  <p className="text-[10px] text-premium-text/45">
                    Keep learning daily
                  </p>
                </div>
              </div>

              <div className="bg-white border border-premium-text/5 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
                <Trophy className="w-4 h-4 text-amber-500" />
                <div>
                  <p className="text-xs font-bold">1,840 XP</p>
                  <p className="text-[10px] text-premium-text/45">
                    Earned this month
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-6">
            
            <div className="flex items-center justify-between border-b border-premium-text/5 pb-3">
              
              <h2 className="text-lg font-bold">
                Enrolled Courses
              </h2>

              <span className="text-xs font-semibold text-premium-text/45">
                {ongoingCourses.length} active courses
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              
              {ongoingCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-premium-text/5 rounded-3xl p-6 space-y-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-premium-text/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    
                    <span className="text-[10px] font-bold tracking-wider text-premium-text/45 uppercase bg-premium-bg px-2.5 py-1 rounded-full">
                      {course.category}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs text-premium-text/50">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.time}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    
                    <h3 className="font-bold text-sm text-premium-text leading-tight">
                      {course.title}
                    </h3>

                    <p className="text-xs text-premium-text/50">
                      Instructor: {course.instructor}
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    
                    <div className="flex items-center justify-between text-[11px] font-bold text-premium-text/60">
                      <span>Progress: {course.progress}%</span>
                      <span>{course.lectures} Lectures</span>
                    </div>

                    <div className="w-full h-2 bg-premium-bg rounded-full overflow-hidden">
                      <div
                        className="h-full bg-premium-text rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-1">
                    
                    <Button className="w-full rounded-2xl flex items-center gap-1.5 bg-premium-text text-white hover:bg-premium-text/90">
                      <PlayCircle className="w-4 h-4" />
                      Resume Learning
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6 pb-10">
            
            <div className="flex items-center justify-between border-b border-premium-text/5 pb-3">
              
              <h2 className="text-lg font-bold">
                Available Exchange Paths
              </h2>

              <span className="text-xs font-semibold text-premium-text/45">
                Recommended for you
              </span>
            </div>

            <div className="space-y-4">
              
              {popularCourses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-premium-text/5 hover:border-premium-text/10 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex items-start gap-4">
                    
                    <div className="w-11 h-11 rounded-xl bg-premium-bg flex items-center justify-center shrink-0 border border-premium-text/5">
                      <BookOpen className="w-4 h-4 text-premium-text/65" />
                    </div>

                    <div className="space-y-2">
                      
                      <h3 className="font-bold text-sm text-premium-text">
                        {course.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 text-[10px] text-premium-text/45 font-semibold">
                        
                        <span>{course.category}</span>

                        <span>•</span>

                        <span>{course.duration}</span>

                        <span>•</span>

                        <span className="text-premium-text/60">
                          {course.level}
                        </span>

                        <span>•</span>

                        <span className="flex items-center gap-1 text-amber-500">
                          <Star className="w-3 h-3 fill-current" />
                          {course.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    
                    <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Available
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-xl text-xs font-bold flex items-center gap-1 hover:bg-premium-text hover:text-white transition-colors"
                    >
                      Details
                      <ArrowRight className="w-3 h-3" />
                    </Button>
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

export default Courses;