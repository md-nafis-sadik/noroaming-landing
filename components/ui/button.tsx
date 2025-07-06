import { cn } from "@/lib/utils";
import "@/styles/animation.css";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold !leading-[1.1] rounded-lg transition_common hover:-translate-y-[2px]",
  {
    variants: {
      variant: {
        default: "bg-main-400 hover:bg-main-500 text-white",
        gradient: "gradient-button-border",
        outlined: "bg-transparent border border-[#242424]",
      },
      size: {
        default: "px-4 md:px-6 py-2 md:py-3",
        sm: "px-4 px-2",
        lg: "px-6 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "font-inter",
          buttonVariants({ variant, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
