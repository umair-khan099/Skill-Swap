import {
  Library as LibraryIcon,
  Bookmark,
  FileText,
  Download,
  Heart,
  ExternalLink,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const Library = () => {
  const bookmarks = [
    {
      title: "React 19 Server Actions Cheatsheet",
      type: "PDF Guide",
      size: "2.4 MB",
      date: "2 days ago",
      category: "Development",
    },
    {
      title: "SaaS UI Layout Design Guidelines",
      type: "Figma File",
      size: "External Link",
      date: "1 week ago",
      category: "Design",
    },
    {
      title: "Intro to Postgres Indexing & Tuning",
      type: "Markdown",
      size: "45 KB",
      date: "2 weeks ago",
      category: "Development",
    },
    {
      title: "Advanced Tailwind Animation Patterns",
      type: "PDF Guide",
      size: "1.1 MB",
      date: "3 weeks ago",
      category: "Frontend",
    },
    {
      title: "System Design Interview Vault",
      type: "Notion Docs",
      size: "External Link",
      date: "1 month ago",
      category: "Architecture",
    },
    {
      title: "Redis Pub/Sub Deep Dive",
      type: "Markdown",
      size: "70 KB",
      date: "1 month ago",
      category: "Backend",
    },
  ];

  const sharedResources = [
    {
      title: "Tailwind V4 Typography Plugin Info",
      downloads: 142,
      hearts: 38,
      author: "Marcus Brody",
    },
    {
      title: "Framer Motion Handshake Animations",
      downloads: 95,
      hearts: 29,
      author: "Sophia Vance",
    },
    {
      title: "Axios Interceptor Auth Flow Template",
      downloads: 220,
      hearts: 74,
      author: "Elena Rostova",
    },
    {
      title: "Production-grade Node.js Logger Setup",
      downloads: 168,
      hearts: 52,
      author: "Daniel Cruz",
    },
    {
      title: "Modern Dashboard UI Components",
      downloads: 312,
      hearts: 106,
      author: "Olivia Parker",
    },
  ];

  return (
    <div className="h-screen overflow-hidden bg-premium-bg text-premium-text select-none">
      
      <div className="h-full overflow-y-auto scrollbar-thin">
        
        <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-10">
          
          <div className="space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-premium-text/5 shadow-sm text-xs font-medium text-premium-text/60">
              <LibraryIcon className="w-3.5 h-3.5" />
              <span>Resource Vault</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-premium-text">
              My Saved Library
            </h1>

            <p className="text-premium-text/60 max-w-xl text-sm leading-relaxed">
              Keep track of all documents, guides, bookmarks, and files shared
              by other community members.
            </p>
          </div>

          <section className="space-y-6">
            
            <div className="flex items-center justify-between border-b border-premium-text/5 pb-3">
              
              <h2 className="text-lg font-bold">
                Bookmarks & Notes
              </h2>

              <span className="text-xs font-semibold text-premium-text/45">
                {bookmarks.length} saved items
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              
              {bookmarks.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-premium-text/5 rounded-3xl p-5 flex flex-col justify-between space-y-5 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-premium-text/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300"
                >
                  <div className="space-y-4">
                    
                    <div className="flex items-center justify-between">
                      
                      <span className="text-[10px] font-bold tracking-wider text-premium-text/45 uppercase bg-premium-bg px-2.5 py-1 rounded-full">
                        {item.category}
                      </span>

                      <Bookmark className="w-4 h-4 text-premium-text fill-premium-text" />
                    </div>

                    <h3 className="font-bold text-sm text-premium-text leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-premium-text/5 text-[10px] text-premium-text/50">
                    
                    <div className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      <span>
                        {item.type} • {item.size}
                      </span>
                    </div>

                    <span>{item.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="space-y-6 pb-10">
            
            <div className="flex items-center justify-between border-b border-premium-text/5 pb-3">
              
              <h2 className="text-lg font-bold">
                Shared Community Assets
              </h2>

              <span className="text-xs font-semibold text-premium-text/45">
                Trending Resources
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {sharedResources.map((asset, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-premium-text/5 hover:border-premium-text/10 rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
                >
                  <div className="space-y-3 min-w-0">
                    
                    <h3 className="font-bold text-sm text-premium-text leading-snug">
                      {asset.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 text-[10px] text-premium-text/45 font-semibold">
                      
                      <span>By {asset.author}</span>

                      <span>•</span>

                      <span className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {asset.downloads} downloads
                      </span>

                      <span>•</span>

                      <span className="flex items-center gap-1 text-rose-500">
                        <Heart className="w-3 h-3 fill-rose-500" />
                        {asset.hearts}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl flex items-center gap-1 hover:bg-premium-text hover:text-white transition-colors shrink-0"
                  >
                    Access
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Library;