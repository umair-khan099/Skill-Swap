import { useState } from "react";
import { MessageSquare, Search, Send, CheckCheck, Smile, Phone, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Messages = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [typedMessage, setTypedMessage] = useState("");

  const chats = [
    { id: 0, name: "Sophia Vance", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120", status: "Active now", preview: "Sounds good, let's schedule our first Next.js session!", time: "2m ago", unread: 2, online: true },
    { id: 1, name: "Marcus Brody", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120", status: "Away", preview: "Thanks for the feedback on my layout", time: "1h ago", unread: 0, online: false },
    { id: 2, name: "Elena Rostova", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120", status: "Offline", preview: "Can we trade Figma tips for Python help?", time: "Yesterday", unread: 0, online: false }
  ];

  const currentMessages = [
    { sender: "them", text: "Hey! I saw you are looking to learn advanced React architecture.", time: "10:15 AM" },
    { sender: "me", text: "Yes, that's correct! I can help you with backend Node.js and SQL in exchange.", time: "10:18 AM" },
    { sender: "them", text: "That is exactly what I need. I'm currently working on a scalable dashboard.", time: "10:20 AM" },
    { sender: "them", text: "Sounds good, let's schedule our first Next.js session!", time: "10:21 AM" }
  ];

  return (
    <div className="w-full h-screen bg-premium-bg flex border-l border-[#0A0A0F]/5 select-none">
      <div className="w-80 border-r border-[#0A0A0F]/5 flex flex-col h-full bg-white">
        <div className="p-4 border-b border-[#0A0A0F]/5 space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">Messages</h1>
            <MessageSquare className="w-5 h-5 text-premium-text/60" />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-premium-text/35" />
            <Input
              type="text"
              placeholder="Search conversations..."
              className="pl-9 h-9 border-[#0A0A0F]/10 rounded-xl text-xs"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                activeChat === chat.id 
                  ? "bg-premium-bg border border-[#0A0A0F]/5 shadow-sm" 
                  : "hover:bg-premium-bg/50 border border-transparent"
              }`}
            >
              <div className="relative">
                <img src={chat.avatar} alt={chat.name} className="w-10 h-10 rounded-full object-cover border border-[#0A0A0F]/5" />
                {chat.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-premium-text truncate">{chat.name}</span>
                  <span className="text-[9px] text-premium-text/45">{chat.time}</span>
                </div>
                <p className="text-[11px] text-premium-text/50 truncate mt-0.5">{chat.preview}</p>
              </div>
              {chat.unread > 0 && (
                <span className="w-4 h-4 rounded-full bg-premium-text text-white text-[9px] font-bold flex items-center justify-center">
                  {chat.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col h-full bg-premium-bg">
        <div className="h-16 px-6 bg-white border-b border-[#0A0A0F]/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={chats[activeChat].avatar} 
              alt={chats[activeChat].name} 
              className="w-9 h-9 rounded-full object-cover border border-[#0A0A0F]/5" 
            />
            <div>
              <h2 className="font-bold text-xs text-premium-text">{chats[activeChat].name}</h2>
              <span className="text-[10px] text-premium-text/40">{chats[activeChat].status}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-premium-text/60">
            <button className="hover:text-premium-text transition-colors"><Phone className="w-4 h-4" /></button>
            <button className="hover:text-premium-text transition-colors"><Video className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {currentMessages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div className="max-w-[70%] space-y-1">
                <div className={`px-4 py-3 rounded-2xl text-xs leading-relaxed ${
                  msg.sender === "me" 
                    ? "bg-premium-text text-white rounded-tr-none shadow-[0_2px_8px_rgba(0,0,0,0.04)]" 
                    : "bg-white text-premium-text border border-[#0A0A0F]/5 rounded-tl-none"
                }`}>
                  {msg.text}
                </div>
                <div className={`flex items-center gap-1 text-[9px] text-premium-text/40 ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                  <span>{msg.time}</span>
                  {msg.sender === "me" && <CheckCheck className="w-3 h-3 text-emerald-500" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white border-t border-[#0A0A0F]/5">
          <form 
            onSubmit={(e) => { e.preventDefault(); setTypedMessage(""); }}
            className="flex items-center gap-2"
          >
            <button type="button" className="p-2 text-premium-text/45 hover:text-premium-text transition-colors">
              <Smile className="w-5 h-5" />
            </button>
            <Input
              type="text"
              placeholder="Write a message..."
              value={typedMessage}
              onChange={(e) => setTypedMessage(e.target.value)}
              className="flex-1 border-[#0A0A0F]/10 rounded-xl h-10 text-xs px-4"
            />
            <Button type="submit" className="h-10 w-10 p-0 rounded-xl bg-premium-text hover:bg-premium-text/90">
              <Send className="w-4 h-4 text-white" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messages;
