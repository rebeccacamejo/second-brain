import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, errorMessage, ...props }, ref) => {
    const inputId = React.useId();
    const errorId = `${inputId}-error`;

    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm transition-colors",
            "placeholder:text-gray-400",
            "focus:border-brand-500 focus:ring-brand-500 focus:ring-2 focus:ring-offset-2 focus:outline-none",
            "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50",
            "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500",
            "dark:focus:border-brand-400 dark:focus:ring-brand-400",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:border-red-600 dark:focus:ring-red-600",
            className
          )}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error && errorMessage ? errorId : undefined}
          {...props}
        />
        {error && errorMessage && (
          <p
            id={errorId}
            className="mt-1.5 text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
