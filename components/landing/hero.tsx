"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { Play } from "lucide-react";

const SPECIALIZATIONS = [
  "Machine Learning",
  "Deep Learning",
  "AI Research",
  "Neural Networks",
] as const;

export function Hero() {
  const [currentSpecialization, setCurrentSpecialization] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialization((prev) => (prev + 1) % SPECIALIZATIONS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
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
          {/* Eyebrow - Social Proof */}
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-50 to-purple-50 px-4 py-2 dark:from-brand-950 dark:to-purple-950">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Join 1,847 ML engineers already learning
            </span>
          </div>

          {/* Main Headline with Rotating Text */}
          <h1 className="animate-fade-in mb-6 text-3xl font-bold sm:text-5xl lg:text-6xl">
            Your Second Brain for{" "}
            <span className="relative inline-block">
              <span
                key={currentSpecialization}
                className="gradient-text animate-fade-in bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent"
              >
                {SPECIALIZATIONS[currentSpecialization]}
              </span>
            </span>
          </h1>

          {/* Subheadline - Pain Point → Solution */}
          <p className="animate-fade-in mb-12 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Stop forgetting what you learn.
            </span>{" "}
            Build a living knowledge graph that connects papers, videos, and
            courses into mastery.
          </p>

          {/* Waitlist Form */}
          <div id="waitlist" className="animate-fade-in w-full max-w-md">
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
              <span className="font-medium">
                Trusted by researchers at MIT, Stanford & Google
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
