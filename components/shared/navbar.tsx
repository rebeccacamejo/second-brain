"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { useLocalStorage } from "@/hooks/use-local-storage";

const NAV_ITEMS = [
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
] as const;

export function Navbar() {
  const { scrollPosition, isAtTop } = useScrollPosition(50);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [joinedToday] = useLocalStorage<number>("joinedToday", 247);

  // Calculate scroll progress
  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / scrollableHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const isScrolled = !isAtTop;

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-gray-200 dark:bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-brand-500 via-purple-500 to-brand-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg shadow-sm py-3"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto container-padding">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
                  SkillForge
                </h1>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-purple-600/20 blur-xl -z-10" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-brand-600 dark:text-gray-300 dark:hover:text-brand-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Button with Social Proof */}
            <div className="flex items-center gap-3">
              <div className="relative group">
                <Button
                  size="sm"
                  className={cn(
                    "relative overflow-hidden bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700",
                    "shadow-lg hover:shadow-xl transition-all duration-300",
                    "animate-pulse-glow"
                  )}
                  onClick={() => {
                    // Scroll to hero section or open modal
                    document.querySelector("#waitlist")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Join Waitlist
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>

                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>

                {/* Social Proof Badge */}
                <div className="absolute -top-2 -right-2 animate-fade-in">
                  <Badge
                    variant="success"
                    className="text-[10px] px-1.5 py-0.5 shadow-lg animate-pulse"
                  >
                    {joinedToday} joined today
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border for depth */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-800" />
        )}
      </nav>

      {/* Spacer to prevent content jump */}
      <div className={cn("transition-all duration-300", isScrolled ? "h-16" : "h-20")} />
    </>
  );
}
