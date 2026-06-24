import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-xl border border-gold-500/20 bg-white/5 px-4 text-sm text-ivory placeholder:text-ivory/40 outline-none transition-colors focus:border-gold-500/60",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
export { Input };
