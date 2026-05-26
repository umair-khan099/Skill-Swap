
const BentoGrid = () => {
  return (
    <div className="w-full max-w-275 mx-auto px-4 md:px-0 mt-16 select-none">
      <div className="grid grid-cols-12 gap-5">
        
        <div className="col-span-12 md:col-span-3 h-62.5 relative rounded-[22px] p-8 overflow-hidden bg-[#E7F1FB] border border-premium-text/5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div className="absolute -right-3.75 -bottom-3.75 w-40 h-40 opacity-80 group-hover:scale-105 transition-transform duration-500 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-premium-text">
              <path
                d="M30,70 C15,70 10,55 25,45 C20,25 45,15 55,30 C65,15 90,25 80,45 C95,55 90,70 70,70 Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="4 2"
                fill="none"
              />
              <path
                d="M35,65 C25,65 20,53 32,46 C28,30 50,22 58,34 C66,22 86,30 78,46 C90,53 85,65 68,65 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="50" cy="50" r="3" fill="currentColor" />
              <circle cx="20" cy="30" r="2" fill="currentColor" />
              <circle cx="75" cy="25" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M15,55 Q20,60 25,55" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
          
          <div className="z-10">
            <span className="text-[12px] uppercase font-bold tracking-widest text-premium-text/40">Services</span>
          </div>
          <div className="z-10">
            <h3 className="text-[26px] font-bold tracking-tight text-premium-text leading-none">Cloud</h3>
          </div>
        </div>

        <div className="col-span-12 md:col-span-3 h-62.5 relative rounded-[22px] p-8 overflow-hidden bg-[#FDF1EC] border border-premium-text/5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div className="absolute -right-2.5 -bottom-2.5 w-36 h-36 opacity-85 group-hover:scale-105 transition-transform duration-500 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-premium-text">
              <line x1="15" y1="85" x2="85" y2="85" stroke="currentColor" strokeWidth="1.5" />
              <line x1="15" y1="15" x2="15" y2="85" stroke="currentColor" strokeWidth="1.5" />
              
              <rect x="25" y="55" width="10" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" fill="#FFE5D9" />
              <rect x="42" y="35" width="10" height="50" rx="2" stroke="currentColor" strokeWidth="1.5" fill="#FFD0C1" />
              <rect x="59" y="45" width="10" height="40" rx="2" stroke="currentColor" strokeWidth="1.5" fill="#FFE5D9" />
              <rect x="76" y="20" width="10" height="65" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
              
              <circle cx="81" cy="15" r="3" fill="#FFE5D9" stroke="currentColor" strokeWidth="1" />
              <circle cx="47" cy="30" r="2" fill="currentColor" />
            </svg>
          </div>
          
          <div className="z-10">
            <span className="text-[12px] uppercase font-bold tracking-widest text-premium-text/40">Data</span>
          </div>
          <div className="z-10">
            <h3 className="text-[26px] font-bold tracking-tight text-premium-text leading-none">Analytics</h3>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 h-62.5 relative rounded-[22px] p-8 overflow-hidden bg-[#EDF0FE] border border-premium-text/5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div className="absolute right-4 -bottom-2.5 w-64 h-52 opacity-80 group-hover:scale-103 transition-transform duration-500 pointer-events-none">
            <svg viewBox="0 0 200 160" fill="none" className="w-full h-full text-premium-text">
              <circle cx="80" cy="90" r="45" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
              <circle cx="120" cy="90" r="45" stroke="currentColor" strokeWidth="1.5" />
              
              <path d="M20,130 Q70,90 120,130 T220,130" stroke="currentColor" strokeWidth="1" />
              
              <rect x="95" y="65" width="50" height="50" rx="6" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 3" />
              <circle cx="120" cy="90" r="6" fill="currentColor" />
              
              <polygon points="120,90 132,105 125,107 129,117 125,119 121,109 114,113" fill="currentColor" stroke="currentColor" strokeWidth="1" />
              
              <path d="M40,40 L45,40 M40,40 L35,40 M40,40 L40,45 M40,40 L40,35" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="160" cy="30" r="3" fill="currentColor" />
            </svg>
          </div>
          
          <div className="z-10">
            <span className="text-[12px] uppercase font-bold tracking-widest text-premium-text/40">Creative</span>
          </div>
          <div className="z-10">
            <h3 className="text-[28px] font-bold tracking-tight text-premium-text leading-none">UI/UX Design</h3>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 h-95 relative rounded-[22px] p-8 overflow-hidden bg-[#E6F7F9] border border-premium-text/5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div className="absolute left-0 right-0 -bottom-5 h-60 opacity-60 group-hover:-translate-y-1.25 transition-transform duration-500 pointer-events-none">
            <svg viewBox="0 0 300 200" fill="none" className="w-full h-full text-premium-text">
              <line x1="20" y1="180" x2="280" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
              <line x1="20" y1="140" x2="280" y2="140" stroke="currentColor" strokeWidth="1.2" />
              <line x1="20" y1="100" x2="280" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              
              <path d="M50,180 C80,180 100,140 130,140 S180,100 210,100" stroke="currentColor" strokeWidth="1.5" />
              <path d="M100,180 C130,140 160,140 190,100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
              
              <circle cx="50" cy="180" r="4" fill="currentColor" />
              <circle cx="130" cy="140" r="5" fill="#C6F1F5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="210" cy="100" r="4" fill="currentColor" />
              <circle cx="250" cy="140" r="3" fill="currentColor" />
            </svg>
          </div>
          
          <div className="z-10">
            <span className="text-[12px] uppercase font-bold tracking-widest text-premium-text/40">Enterprise Ecosystem</span>
          </div>
          
          <div className="z-10 flex flex-col justify-center h-full max-w-70">
            <h3 className="text-[25px] font-bold tracking-tight text-premium-text leading-snug">
              CRM / ERP / ECM / Full Stack / ETL Solutions
            </h3>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 h-95 relative rounded-[22px] p-8 overflow-hidden bg-[#E6F4EB] border border-premium-text/5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div className="absolute right-0 -bottom-2.5 w-64 h-60 opacity-95 group-hover:scale-102 transition-transform duration-500 pointer-events-none">
            <svg viewBox="0 0 220 200" fill="none" className="w-full h-full text-premium-text">
              <rect x="110" y="70" width="80" height="70" rx="10" stroke="currentColor" strokeWidth="1.8" fill="white" />
              <line x1="110" y1="90" x2="190" y2="90" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="125" cy="80" r="3" fill="currentColor" />
              <circle cx="135" cy="80" r="3" fill="currentColor" />
              <circle cx="145" cy="80" r="3" fill="currentColor" />
              
              <ellipse cx="60" cy="120" rx="25" ry="10" stroke="currentColor" strokeWidth="1.8" fill="#C2ECD2" />
              <path d="M35,120 L35,160 A25,10 0 0,0 85,160 L85,120" stroke="currentColor" strokeWidth="1.8" fill="none" />
              <ellipse cx="60" cy="160" rx="25" ry="10" stroke="currentColor" strokeWidth="1.8" fill="#C2ECD2" />
              
              <circle cx="85" cy="65" r="16" stroke="currentColor" strokeWidth="1.8" fill="white" />
              <circle cx="80" cy="60" r="4" fill="currentColor" />
              
              <path d="M150,155 C170,140 190,170 170,185" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              
              <path d="M175,35 L179,35 M175,35 L171,35 M175,35 L175,39 M175,35 L175,31" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="30" cy="80" r="3" fill="currentColor" />
            </svg>
          </div>

          <div className="z-10">
            <span className="text-[12px] uppercase font-bold tracking-widest text-premium-text/40">Inquire</span>
          </div>
          
          <div className="z-10 max-w-70 mb-6">
            <h3 className="text-[27px] font-bold tracking-tight text-premium-text leading-tight">
              Get Free Quotation & No Consultation Fee!
            </h3>
          </div>
        </div>

        <div className="col-span-12 md:col-span-3 h-95 relative rounded-[22px] p-8 overflow-hidden bg-[#EAF4E8] border border-premium-text/5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div className="absolute -right-3.75 -bottom-5 w-48 h-64 opacity-80 group-hover:-translate-y-1.25 transition-transform duration-500 pointer-events-none">
            <svg viewBox="0 0 120 180" fill="none" className="w-full h-full text-premium-text">
              <rect x="15" y="10" width="90" height="170" rx="16" stroke="currentColor" strokeWidth="2" fill="white" />
              <rect x="25" y="24" width="70" height="120" rx="6" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
              
              <circle cx="60" cy="18" r="2" fill="currentColor" />
              <circle cx="60" cy="156" r="6" stroke="currentColor" strokeWidth="1.2" fill="none" />
              
              <rect x="32" y="34" width="56" height="24" rx="4" stroke="currentColor" strokeWidth="1" fill="#DCECD7" />
              <line x1="38" y1="70" x2="82" y2="70" stroke="currentColor" strokeWidth="1" />
              <line x1="38" y1="80" x2="70" y2="80" stroke="currentColor" strokeWidth="1" />
              
              <circle cx="45" cy="108" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="75" cy="108" r="10" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          
          <div className="z-10">
            <span className="text-[12px] uppercase font-bold tracking-widest text-premium-text/40">Platforms</span>
          </div>
          <div className="z-10">
            <h3 className="text-[26px] font-bold tracking-tight text-premium-text leading-none">Web / Mobile</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BentoGrid;
