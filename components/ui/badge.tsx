import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-gold-400",
        className
      )}
      {...props}
    />
  );
}
