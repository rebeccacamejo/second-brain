import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("w-full", {
  variants: {
    background: {
      default: "bg-white dark:bg-gray-950",
      muted: "bg-gray-50 dark:bg-gray-900",
      brand: "bg-brand-50 dark:bg-brand-950",
      gradient:
        "bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900",
      transparent: "bg-transparent",
    },
    spacing: {
      none: "",
      sm: "py-8 sm:py-12",
      default: "section-padding",
      lg: "py-24 sm:py-32 lg:py-40",
    },
  },
  defaultVariants: {
    background: "default",
    spacing: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  /**
   * HTML element to render
   * @default "section"
   */
  as?: "section" | "div" | "article" | "aside";
  /**
   * Whether the section is contained (uses Container component internally)
   * @default false
   */
  contained?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      background,
      spacing,
      as: Component = "section",
      contained = false,
      children,
      ...props
    },
    ref
  ) => {
    const content = contained ? (
      <div className="container mx-auto container-padding">{children}</div>
    ) : (
      children
    );

    return (
      <Component
        ref={ref as any}
        className={cn(sectionVariants({ background, spacing }), className)}
        {...props}
      >
        {content}
      </Component>
    );
  }
);

Section.displayName = "Section";

/**
 * Pre-configured section with container
 */
const SectionContained = React.forwardRef<HTMLElement, SectionProps>(
  (props, ref) => {
    return <Section ref={ref} contained {...props} />;
  }
);

SectionContained.displayName = "SectionContained";

export { Section, SectionContained, sectionVariants };
