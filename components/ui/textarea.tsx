import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  errorMessage?: string;
  /**
   * Auto-resize the textarea based on content
   * @default false
   */
  autoResize?: boolean;
  /**
   * Show character count
   */
  maxLength?: number;
  /**
   * Show character count indicator
   * @default false
   */
  showCount?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      error,
      errorMessage,
      autoResize = false,
      maxLength,
      showCount = false,
      onChange,
      ...props
    },
    ref
  ) => {
    const textareaId = React.useId();
    const errorId = `${textareaId}-error`;
    const internalRef = React.useRef<HTMLTextAreaElement>(null);
    const [charCount, setCharCount] = React.useState(
      props.defaultValue?.toString().length || 0
    );

    // Merge refs
    React.useImperativeHandle(ref, () => internalRef.current!);

    // Auto-resize functionality
    React.useEffect(() => {
      if (autoResize && internalRef.current) {
        const textarea = internalRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [autoResize, props.value, props.defaultValue]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);

      if (autoResize && internalRef.current) {
        const textarea = internalRef.current;
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }

      onChange?.(e);
    };

    return (
      <div className="w-full">
        <textarea
          ref={internalRef}
          className={cn(
            "flex min-h-[80px] w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm transition-colors",
            "placeholder:text-gray-400",
            "focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50",
            "dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500",
            "dark:focus:border-brand-400 dark:focus:ring-brand-400",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:border-red-600 dark:focus:ring-red-600",
            autoResize && "resize-none overflow-hidden",
            className
          )}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error && errorMessage ? errorId : undefined}
          maxLength={maxLength}
          onChange={handleChange}
          {...props}
        />

        <div className="flex items-center justify-between mt-1.5">
          {/* Error message */}
          {error && errorMessage && (
            <p
              id={errorId}
              className="text-sm text-red-600 dark:text-red-400"
              role="alert"
            >
              {errorMessage}
            </p>
          )}

          {/* Character count */}
          {showCount && maxLength && (
            <p
              className={cn(
                "text-xs text-gray-500 dark:text-gray-400 ml-auto",
                charCount > maxLength * 0.9 && "text-yellow-600",
                charCount >= maxLength && "text-red-600"
              )}
            >
              {charCount} / {maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
