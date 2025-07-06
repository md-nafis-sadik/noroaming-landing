"use client";
import React from "react";
import "@/styles/animation.css";
import { cn } from "@/lib/utils";
import colors from "@/lib/colors";
import { ArrowLongTailIcon, LineIcon } from "@/services/assets/svgs";
import { useRouter } from "next/router";
import Link from "next/link";

interface ArrowLineupButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  lineColor?: string;
  textClassName?: string;
  href?: string;
}

// eslint-disable-next-line react/display-name
const ArrowLineupButton = React.forwardRef<
  HTMLButtonElement,
  ArrowLineupButtonProps
>(
  (
    {
      children,
      className = "",
      lineColor = colors.main[500],
      textClassName,
      href = "",
      ...props
    },
    ref
  ) => {
    return (
      <Link
        href={href}
        className="inline-block p-[2px] transition-common group"
      >
        <button
          ref={ref}
          className={cn(
            className,
            "relative flex items-center gap-2 px-6 py-3 text-base font-bold text-text-900 !leading-[1.1] overflow-hidden transition-all duration-300 font-inter"
          )}
          {...props}
        >
          {/* Left SVG */}
          <span className="flex-shrink-0 !w-6 !h-6 group-hover:opacity-0 flex_center">
            <LineIcon color={lineColor} className="!w-6 !h-6 !shrink-0" />
          </span>
          {/* Text */}
          <span
            className={cn(
              "relative group-hover:-translate-x-6 transition-transform duration-300 font-inter md:text-base font-bold text-text-900 !leading-[1.1]",
              textClassName
            )}
          >
            {children}
          </span>
          {/* Right Arrow */}
          <span
            className={cn(
              "absolute right-3 opacity-0 group-hover:opacity-100 group-hover:right-5 transition-all duration-300 flex_center"
            )}
          >
            <ArrowLongTailIcon
              color={lineColor}
              className="!w-6 !h-6 !shrink-0"
            />
          </span>
        </button>
      </Link>
    );
  }
);

export default ArrowLineupButton;
