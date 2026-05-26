import { Button } from "../../../components/ui/button";

const SocialLogin = () => {
  const handleGoogleClick = () => {
    alert("Continue with Google authentication flow requested.");
  };

  const handleAppleClick = () => {
    alert("Continue with Apple authentication flow requested.");
  };

  return (
    <div className="w-full flex flex-col gap-2.5">
      <Button
        type="button"
        variant="outline"
        onClick={handleGoogleClick}
        className="w-full h-10 border-[#0A0A0F]/15 hover:bg-[#0A0A0F]/5 text-[#0A0A0F] font-medium text-xs rounded-none transition-colors flex items-center justify-center gap-2 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#0A0A0F]">
          <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.99 5.99 0 0 1 8 12.5a5.99 5.99 0 0 1 5.991-6.014c1.49 0 2.859.549 3.922 1.455l3.142-3.142A9.997 9.997 0 0 0 13.99 1.5C8.47 1.5 4 5.97 4 11.5S8.47 21.5 13.99 21.5c5.77 0 9.77-4.06 9.77-9.93 0-.585-.05-1.154-.15-1.785H12.24Z" />
        </svg>
        Continue with Google
      </Button>
      <Button
        type="button"
        variant="outline"
        onClick={handleAppleClick}
        className="w-full h-10 border-[#0A0A0F]/15 hover:bg-[#0A0A0F]/5 text-[#0A0A0F] font-medium text-xs rounded-none transition-colors flex items-center justify-center gap-2 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#0A0A0F]">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-.95-.44-1.9-.45-2.92 0-1.15.52-2.02.43-2.95-.4A12.06 12.06 0 0 1 4 10.3c0-3.32 2.1-5.12 4.18-5.12 1.08 0 1.98.4 2.65.4.67 0 1.95-.46 3.32-.32 1.42.14 2.7.75 3.42 1.83-2.8 1.68-2.35 5.37.58 6.57a6.22 6.22 0 0 1-2.6 4.25c.5.97 1.1 1.7 1.7 2.37ZM14.92 3.2C15.6.83 13.67 0 11.9 0c-.22 1.94-1.9 3.8-3.7 3.8-1.5 0-3-.93-3-2.63C7 3.5 8.7 5.2 10.32 5.2c1.78 0 3.82-1.02 4.6-2Z" />
        </svg>
        Continue with Apple
      </Button>
    </div>
  );
};

export default SocialLogin;
