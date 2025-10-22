import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "animate-spin rounded-full border-2 border-current border-t-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12",
      },
      variant: {
        default: "text-brand-600 dark:text-brand-400",
        light: "text-white",
        dark: "text-gray-900",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

function Spinner({
  className,
  size,
  variant,
  label = "Loading...",
  ...props
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn("inline-block", className)}
      {...props}
    >
      <div className={cn(spinnerVariants({ size, variant }))} />
      <span className="sr-only">{label}</span>
    </div>
  );
}

/**
 * Full-page loading spinner
 */
function SpinnerFullPage({ size = "lg", label }: SpinnerProps) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner size={size} label={label} />
    </div>
  );
}

export { Spinner, SpinnerFullPage, spinnerVariants };
