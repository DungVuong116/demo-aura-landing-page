import { Typography } from "@poweredbygen/gen-ui";
import { cn } from "@poweredbygen/gen-ui";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  textSize?: number;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", textSize = 12, children, className, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-5 rounded-[1000px] px-4 py-1 transition-colors",
          variant === "secondary" &&
            "border border-solid border-(--text-muted-dark) bg-transparent hover:bg-(--text-muted-dark)/5",
          variant === "primary" &&
            "border-none bg-(--text-muted-dark) hover:bg-(--text-muted-dark)/80",
          className
        )}
        {...props}
      >
        <Typography
          variant="buttonSmall"
          className={cn(
            "capitalize font-semibold leading-[22px]",
            variant === "secondary" && "text-(--text-muted-dark)",
            variant === "primary" && "text-white"
          )}
          style={{ fontSize: `${textSize}px` }}
        >
          {children}
        </Typography>
      </button>
    );
  }
);

Button.displayName = "Button";
