import React from "react";
import { cn } from "../../lib/utils";

export const Section = React.forwardRef(
  ({ className, id, container = true, children, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn("py-20 md:py-32 relative overflow-hidden", className)}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";
