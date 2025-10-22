import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width variant
   * @default "default"
   */
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "default";
  /**
   * Whether to center the container
   * @default true
   */
  center?: boolean;
}

const maxWidthClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full",
  default: "max-w-7xl",
};

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    { className, maxWidth = "default", center = true, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full",
          maxWidthClasses[maxWidth],
          center && "mx-auto",
          "container-padding",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container };
