import { useState, useEffect, useRef } from "react";

export interface ScrollPosition {
  x: number;
  y: number;
}

export type ScrollDirection = "up" | "down" | null;

export interface UseScrollPositionResult {
  scrollPosition: ScrollPosition;
  scrollDirection: ScrollDirection;
  isScrollingDown: boolean;
  isScrollingUp: boolean;
  isAtTop: boolean;
  isAtBottom: boolean;
}

/**
 * Throttle function to limit how often a function can be called
 * @param func - Function to throttle
 * @param delay - Delay in milliseconds
 * @returns Throttled function
 */
function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastRan: number = 0;

  return function (this: any, ...args: Parameters<T>) {
    const now = Date.now();

    if (!lastRan) {
      func.apply(this, args);
      lastRan = now;
    } else {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(
        () => {
          if (now - lastRan >= delay) {
            func.apply(this, args);
            lastRan = now;
          }
        },
        delay - (now - lastRan)
      );
    }
  };
}

/**
 * Hook to track scroll position and direction with throttling for performance
 * @param throttleMs - Throttle delay in milliseconds (default: 100ms)
 * @returns Object with scroll position, direction, and helper booleans
 */
export function useScrollPosition(
  throttleMs: number = 100
): UseScrollPositionResult {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    // SSR safety check
    if (typeof window === "undefined") return;

    // Set initial position
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });
    lastScrollY.current = window.scrollY;

    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;

      // Update position
      setScrollPosition({
        x: currentScrollX,
        y: currentScrollY,
      });

      // Determine direction (only if scrolled more than 5px to avoid jitter)
      if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
        if (currentScrollY > lastScrollY.current) {
          setScrollDirection("down");
        } else if (currentScrollY < lastScrollY.current) {
          setScrollDirection("up");
        }
      }

      lastScrollY.current = currentScrollY;
    }, throttleMs);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [throttleMs]);

  // Helper booleans
  const isScrollingDown = scrollDirection === "down";
  const isScrollingUp = scrollDirection === "up";
  const isAtTop = scrollPosition.y <= 0;
  const isAtBottom =
    typeof window !== "undefined"
      ? window.innerHeight + scrollPosition.y >=
        document.documentElement.scrollHeight - 10 // 10px threshold
      : false;

  return {
    scrollPosition,
    scrollDirection,
    isScrollingDown,
    isScrollingUp,
    isAtTop,
    isAtBottom,
  };
}
