"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  bgClassName?: string;
  borderClassName?: string;
}

export const GradientButton = React.forwardRef<
  HTMLDivElement,
  GradientButtonProps
>(
  (
    {
      children,
      className = "",
      bgClassName = "bg-black", // default background
      borderClassName = "btn-animate-gradient", // default animated border
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "inline-block p-[2px] rounded-full transition_common group shrink-0",
          borderClassName
        )}
      >
        <div
          ref={ref}
          className={cn(
            "flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 font-inter shrink-0 cursor-pointer",
            bgClassName,
            className
          )}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }
);

GradientButton.displayName = "GradientButton";
