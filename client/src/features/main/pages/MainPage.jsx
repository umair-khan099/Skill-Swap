import Navbar from '../../../components/common/Navbar';
import BentoGrid from '../../../components/ui/BentoGrid';
import Footer from '../../../components/common/Footer';

const MainPage = () => {
  return (
    <div className="w-full min-h-screen bg-premium-bg text-premium-text flex flex-col justify-between selection:bg-premium-text selection:text-premium-bg overflow-x-hidden antialiased">
      <Navbar />

      <main className="w-full grow flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 pt-20 pb-32 md:pt-28 md:pb-40">
        <div className="mb-5 animate-fade-in select-none">
          <span className="text-[17px] md:text-[18px] font-normal text-premium-text/60 tracking-normal">
            Get started with <span className="font-semibold text-premium-text/80">Learnmize</span>
          </span>
        </div>

        <div className="w-full max-w-225 text-center mb-12 select-none">
          <h1 className="text-[46px] sm:text-[60px] md:text-[76px] lg:text-[84px] font-bold tracking-[-0.04em] leading-[0.98] text-premium-text">
            What are you looking up-to Learn?
          </h1>
        </div>

        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="w-full max-w-175 h-16 bg-white rounded-full p-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-premium-text/5 flex items-center justify-between mb-24 transition-all duration-300 focus-within:shadow-[0_4px_30px_rgba(0,0,0,0.04)] focus-within:border-premium-text/15"
        >
          <div className="flex items-center gap-3.5 pl-5 flex-1 h-full">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5.5 h-5.5 text-premium-text/40"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              placeholder="Looking for an IT Services"
              className="w-full bg-transparent border-none outline-none text-[16px] text-premium-text placeholder-premium-text/35 font-medium tracking-tight"
            />
          </div>
          <button
            type="submit"
            className="w-40 h-13 cursor-pointer bg-premium-text text-white text-[15px] font-semibold rounded-full hover:opacity-85 active:scale-98 transition-all duration-200 select-none shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
          >
            Search
          </button>
        </form>

        <BentoGrid />

      </main>
      <Footer />
    </div>
  );
};

export default MainPage;