"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckCircle2, Loader2 } from "lucide-react";
import { generateId } from "@/lib/utils";

// Validation schema
const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistFormProps {
  source?: string;
  className?: string;
}

export function WaitlistForm({
  source = "landing",
  className,
}: WaitlistFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setError(null);

    try {
      // Create waitlist entry
      const entry = {
        id: generateId("waitlist"),
        email: data.email,
        source,
        createdAt: new Date().toISOString(),
      };

      // Store in localStorage for now
      const existingEntries = JSON.parse(
        localStorage.getItem("waitlist") || "[]"
      );

      // Check if email already exists
      const emailExists = existingEntries.some(
        (e: any) => e.email === data.email
      );

      if (emailExists) {
        setError("This email is already on the waitlist!");
        return;
      }

      // Add new entry
      existingEntries.push(entry);
      localStorage.setItem("waitlist", JSON.stringify(existingEntries));

      // Optional: Send to API endpoint
      // try {
      //   await apiClient.post("/waitlist", { email: data.email });
      // } catch (apiError) {
      //   console.error("API error:", apiError);
      // }

      // Show success
      setIsSubmitted(true);
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Waitlist submission error:", err);
    }
  };

  if (isSubmitted) {
    return (
      <div className="animate-fade-in flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-950">
        <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        <div>
          <p className="font-medium text-emerald-900 dark:text-emerald-100">
            You&apos;re on the list!
          </p>
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            We&apos;ll notify you when we launch.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email address</FormLabel>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      disabled={form.formState.isSubmitting}
                      {...field}
                      className="flex-1"
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={form.formState.isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950">
              <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
            </div>
          )}
        </form>
      </Form>

      <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
        By joining, you agree to receive updates about our product. Unsubscribe
        anytime.
      </p>
    </div>
  );
}
