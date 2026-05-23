
const Footer = () => {
  return (
    <footer className="w-full bg-premium-bg pt-40 pb-16 px-8 md:px-16 lg:px-24 flex flex-col justify-between select-none relative overflow-hidden">
      
      <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 mb-16">
        <div className="max-w-md">
          <h2 className="text-[44px] md:text-[52px] font-medium tracking-[-0.03em] text-premium-text leading-tight">
            Experience liftoff
          </h2>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div className="flex flex-col">
            <span className="text-[14px] uppercase font-bold tracking-widest text-premium-text/30 mb-4">Ecosystem</span>
            <ul className="flex flex-col gap-2">
              {['Download', 'Product', 'Docs', 'Changelog', 'Press', 'Releases'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[17px] md:text-[18px] font-medium text-premium-text/70 hover:text-premium-text transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <span className="text-[14px] uppercase font-bold tracking-widest text-premium-text/30 mb-4">Company</span>
            <ul className="flex flex-col gap-2">
              {['Blog', 'Pricing', 'Use Cases'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[17px] md:text-[18px] font-medium text-premium-text/70 hover:text-premium-text transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full text-center my-6 md:my-10 select-none">
        <h1 className="text-[100px] sm:text-[150px] md:text-[220px] lg:text-[250px] xl:text-10xl font-semibold text-footer-huge tracking-[-0.02em] leading-[0.8] uppercase pointer-events-none transition-all duration-300">
          Learnmize
        </h1>
      </div>

      <div className="w-full border-t border-premium-text/5 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-premium-text flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">S</span>
          </div>
          <span className="text-[16px] font-semibold text-premium-text/80">
            Learnmize
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[15px] md:text-[16px] text-premium-text/60">
          {['About SkillSwap', 'SkillSwap Products', 'Privacy', 'Terms'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-premium-text transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
