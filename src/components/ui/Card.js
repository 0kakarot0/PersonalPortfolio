import React from "react";
import { cn } from "../../lib/utils";

export const Card = React.forwardRef(
  ({ className, hoverEffect = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-white/10 bg-card backdrop-blur-md p-6",
          hoverEffect && "transition-transform duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
