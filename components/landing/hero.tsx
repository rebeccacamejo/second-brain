"use client";

import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Gradient Background */}
      <div className="from-brand-500/10 dark:from-brand-500/20 absolute inset-0 bg-gradient-to-br via-purple-500/10 to-emerald-500/10 dark:via-purple-500/20 dark:to-emerald-500/20" />

      {/* Animated gradient orbs */}
      <div className="bg-brand-500/30 animate-float absolute -top-40 -right-40 h-80 w-80 rounded-full blur-3xl" />
      <div
        className="animate-float absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="container-padding section-padding relative container mx-auto">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <div className="bg-brand-100 dark:bg-brand-950 border-brand-200 dark:border-brand-800 animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <span className="bg-brand-500 h-2 w-2 animate-pulse rounded-full" />
            <span className="text-brand-700 dark:text-brand-300 text-sm font-medium">
              AI-Powered Learning Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl">
            Your <span className="gradient-text">AI Learning Companion</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in mb-12 max-w-2xl text-xl text-gray-600 sm:text-2xl dark:text-gray-400">
            Master any skill with personalized AI guidance, intelligent learning
            paths, and real-time feedback tailored to your goals.
          </p>

          {/* Waitlist Form */}
          <div className="animate-fade-in w-full max-w-md">
            <WaitlistForm source="hero" />
          </div>

          {/* Secondary CTA */}
          <Button
            size="lg"
            variant="ghost"
            onClick={() => {
              // TODO: Implement watch demo functionality
            }}
            className="animate-fade-in"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>

          {/* Social Proof */}
          <div className="animate-fade-in mt-12 flex items-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="from-brand-400 h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br to-purple-400 dark:border-gray-900"
                  />
                ))}
              </div>
              <span className="font-medium">Join 10,000+ learners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
