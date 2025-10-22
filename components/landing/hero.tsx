"use client";

import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-purple-500/10 to-emerald-500/10 dark:from-brand-500/20 dark:via-purple-500/20 dark:to-emerald-500/20" />

      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative container mx-auto container-padding section-padding">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-100 dark:bg-brand-950 border border-brand-200 dark:border-brand-800 mb-8 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">
              AI-Powered Learning Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Your{" "}
            <span className="gradient-text">AI Learning Companion</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl animate-fade-in">
            Master any skill with personalized AI guidance, intelligent
            learning paths, and real-time feedback tailored to your goals.
          </p>

          {/* Waitlist Form */}
          <div className="w-full max-w-md animate-fade-in">
            <WaitlistForm source="hero" />
          </div>

          {/* Secondary CTA */}
          <Button
            size="lg"
            variant="ghost"
            onClick={() => console.log("Watch Demo clicked")}
            className="animate-fade-in"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>

          {/* Social Proof */}
          <div className="mt-12 flex items-center gap-8 text-sm text-gray-600 dark:text-gray-400 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-400 to-purple-400 border-2 border-white dark:border-gray-900"
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
