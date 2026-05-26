import { useState } from "react";
import {
  PenTool,
  CheckCircle,
  Image,
  Link2,
  HelpCircle,
  Sparkles,
  Upload,
  X,
  FileText,
  Globe,
  Clock3,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PublishPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState("teach");
  const [skills, setSkills] = useState("");

  const handlePublish = (e) => {
    e.preventDefault();

    setTitle("");
    setContent("");
    setSkills("");
  };

  return (
    <div className="h-screen overflow-hidden bg-premium-bg text-premium-text select-none">
      
      <div className="h-full overflow-y-auto scrollbar-thin">
        
        <div className="max-w-3xl mx-auto p-6 md:p-10 space-y-10">
          
          <div className="space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-premium-text/5 shadow-sm text-xs font-medium text-premium-text/60">
              <PenTool className="w-3.5 h-3.5" />
              <span>Exchange Center</span>
            </div>

            <div className="space-y-3">
              
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-premium-text">
                Publish an Exchange Offer
              </h1>

              <p className="text-premium-text/60 text-sm leading-relaxed max-w-2xl">
                Announce a skill you can teach or request a topic you want
                to learn. Match with creators, developers, designers,
                and mentors from the community.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              
              <div className="bg-white border border-premium-text/5 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />

                <div>
                  <p className="text-xs font-bold">
                    Smart Matching
                  </p>

                  <p className="text-[10px] text-premium-text/45">
                    AI powered recommendations
                  </p>
                </div>
              </div>

              <div className="bg-white border border-premium-text/5 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
                <Globe className="w-4 h-4 text-emerald-500" />

                <div>
                  <p className="text-xs font-bold">
                    Global Community
                  </p>

                  <p className="text-[10px] text-premium-text/45">
                    Connect worldwide
                  </p>
                </div>
              </div>

              <div className="bg-white border border-premium-text/5 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
                <Clock3 className="w-4 h-4 text-sky-500" />

                <div>
                  <p className="text-xs font-bold">
                    Fast Responses
                  </p>

                  <p className="text-[10px] text-premium-text/45">
                    Avg reply under 2 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handlePublish}
            className="bg-white border border-premium-text/5 rounded-[32px] p-6 md:p-8 space-y-7 shadow-[0_4px_24px_rgba(0,0,0,0.015)]"
          >
            
            <div className="space-y-3">
              
              <label className="text-xs font-bold text-premium-text/60 uppercase tracking-wider">
                I want to...
              </label>

              <div className="grid grid-cols-2 gap-3">
                
                <button
                  type="button"
                  onClick={() => setPostType("teach")}
                  className={`py-3 rounded-2xl border text-xs font-semibold transition-all duration-200 ${
                    postType === "teach"
                      ? "bg-premium-text text-white border-premium-text shadow-sm"
                      : "bg-premium-bg/55 text-premium-text/60 border-premium-text/5 hover:bg-premium-bg"
                  }`}
                >
                  Teach / Share Skill
                </button>

                <button
                  type="button"
                  onClick={() => setPostType("learn")}
                  className={`py-3 rounded-2xl border text-xs font-semibold transition-all duration-200 ${
                    postType === "learn"
                      ? "bg-premium-text text-white border-premium-text shadow-sm"
                      : "bg-premium-bg/55 text-premium-text/60 border-premium-text/5 hover:bg-premium-bg"
                  }`}
                >
                  Learn / Request Skill
                </button>
              </div>
            </div>

            <div className="space-y-3">
              
              <label className="text-xs font-bold text-premium-text/60 uppercase tracking-wider">
                Offer Title
              </label>

              <Input
                type="text"
                required
                placeholder={
                  postType === "teach"
                    ? "e.g., Learn Advanced React Context & Hooks"
                    : "e.g., Seeking Figma Autolayout Mentorship"
                }
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-12 border-premium-text/10 rounded-2xl text-sm px-4 shadow-none focus-visible:ring-1"
              />
            </div>

            <div className="space-y-3">
              
              <label className="text-xs font-bold text-premium-text/60 uppercase tracking-wider">
                Skills / Technologies
              </label>

              <Input
                type="text"
                required
                placeholder="e.g., React, Tailwind CSS, Javascript"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="h-12 border-premium-text/10 rounded-2xl text-sm px-4 shadow-none focus-visible:ring-1"
              />

              <div className="flex flex-wrap gap-2 pt-1">
                
                {["React", "Node.js", "UI/UX", "MongoDB", "Figma"].map(
                  (tag) => (
                    <button
                      key={tag}
                      type="button"
                      className="px-3 py-1.5 rounded-full text-[11px] font-semibold bg-premium-bg border border-premium-text/5 hover:border-premium-text/15 transition-all"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="space-y-3">
              
              <div className="flex items-center justify-between">
                
                <label className="text-xs font-bold text-premium-text/60 uppercase tracking-wider">
                  Details & Context
                </label>

                <div className="flex items-center gap-1 text-[11px] text-premium-text/40">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Be clear and detailed</span>
                </div>
              </div>

              <textarea
                required
                rows="7"
                placeholder={
                  postType === "teach"
                    ? "Describe your expertise, teaching style, experience level, and what skills you want to learn in exchange..."
                    : "Describe what you're building, your current skill level, and what value you can offer in return..."
                }
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full rounded-2xl border border-premium-text/10 bg-white p-4 text-sm text-premium-text placeholder:text-premium-text/30 focus:border-premium-text focus:outline-none focus:ring-1 focus:ring-premium-text transition-all resize-none"
              />

              <div className="flex items-center justify-between text-[11px] text-premium-text/40">
                <span>
                  Posts with detailed descriptions get better matches.
                </span>

                <span>{content.length}/1000</span>
              </div>
            </div>

            <div className="space-y-3">
              
              <label className="text-xs font-bold text-premium-text/60 uppercase tracking-wider">
                Media & Resources
              </label>

              <div className="border border-dashed border-premium-text/10 rounded-3xl p-6 bg-premium-bg/30 flex flex-col items-center justify-center text-center space-y-3">
                
                <div className="w-12 h-12 rounded-2xl bg-white border border-premium-text/5 flex items-center justify-center shadow-sm">
                  <Upload className="w-5 h-5 text-premium-text/55" />
                </div>

                <div className="space-y-1">
                  
                  <p className="text-sm font-semibold">
                    Upload screenshots, files, or examples
                  </p>

                  <p className="text-[11px] text-premium-text/45">
                    PNG, JPG, PDF, ZIP up to 20MB
                  </p>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="rounded-xl text-xs"
                >
                  Choose Files
                </Button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 pt-4 border-t border-premium-text/5">
              
              <div className="flex flex-wrap items-center gap-4 text-premium-text/45">
                
                <button
                  type="button"
                  className="flex items-center gap-1.5 hover:text-premium-text transition-colors"
                >
                  <Image className="w-4 h-4" />

                  <span className="text-[11px] font-semibold">
                    Add Cover
                  </span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-1.5 hover:text-premium-text transition-colors"
                >
                  <Link2 className="w-4 h-4" />

                  <span className="text-[11px] font-semibold">
                    Attach Files
                  </span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-1.5 hover:text-premium-text transition-colors"
                >
                  <FileText className="w-4 h-4" />

                  <span className="text-[11px] font-semibold">
                    Draft
                  </span>
                </button>
              </div>

              <div className="flex items-center gap-3 w-full lg:w-auto">
                
                <Button
                  type="button"
                  variant="outline"
                  className="h-11 rounded-2xl px-5 text-xs font-semibold border-premium-text/10"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  className="flex-1 lg:flex-none h-11 px-6 rounded-2xl bg-premium-text text-white hover:bg-premium-text/90 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Publish Exchange Post
                </Button>
              </div>
            </div>
          </form>

          <div className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default PublishPost;