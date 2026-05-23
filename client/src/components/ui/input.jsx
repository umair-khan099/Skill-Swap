import React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-none border border-[#0A0A0F]/15 bg-white px-3 py-1.5 text-xs text-premium-text shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-all placeholder:text-[#0A0A0F]/30 focus:border-[#0A0A0F] focus:outline-none focus:ring-1 focus:ring-[#0A0A0F] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
