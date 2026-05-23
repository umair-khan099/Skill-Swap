import {Link} from 'react-router';

const Navbar = () => {
  return (
    <nav className="w-full h-24 flex items-center justify-between px-8 md:px-16 lg:px-24 bg-transparent select-none z-50 relative">
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-9 h-9 relative flex items-center justify-center bg-white rounded-lg border border-premium-text/10 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-transform duration-300 group-hover:scale-105">
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
        
        <div className="flex flex-col leading-none">
          <span className="font-semibold text-[19px] tracking-tight text-premium-text">
            Learnmize
          </span>
          <span className="text-[8px] font-bold tracking-[0.22em] text-premium-text/45 uppercase mt-0.5">
            Peer Exchange
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <a
          href="#website"
          className="text-[15px] font-medium text-premium-text/70 hover:text-premium-text transition-colors duration-250 relative group"
        >
          Check Website
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-premium-text transition-all duration-250 group-hover:w-full" />
        </a>
        <a
          href="#clients"
          className="text-[15px] font-medium text-premium-text/70 hover:text-premium-text transition-colors duration-250 relative group"
        >
          Clients
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-premium-text transition-all duration-250 group-hover:w-full" />
        </a>
        <a
          href="#explore"
          className="text-[15px] font-medium text-premium-text/70 hover:text-premium-text transition-colors duration-250 relative group"
        >
          Explore
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-premium-text transition-all duration-250 group-hover:w-full" />
        </a>
      </div>

      <Link to="/login">
        <button
          className="inline-block px-7 cursor-pointer py-3 bg-premium-text text-white text-[12px] font-medium rounded-full hover:opacity-85 transition-opacity duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.06)] active:scale-98 transform"
        >
          Get Started
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
