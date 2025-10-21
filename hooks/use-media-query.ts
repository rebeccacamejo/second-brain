import { useState, useEffect } from "react";

/**
 * Hook to check if a media query matches
 * @param query - The media query string
 * @returns Boolean indicating if the query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // SSR safety check
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQuery.matches);

    // Create event listener
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener (using addEventListener for better browser support)
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

/**
 * Tailwind CSS breakpoints
 */
const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

/**
 * Hook to check if viewport is mobile size
 * @returns Boolean indicating if viewport is mobile (< 768px)
 */
export function useIsMobile(): boolean {
  return useMediaQuery(`(max-width: ${BREAKPOINTS.md})`);
}

/**
 * Hook to check if viewport is tablet size
 * @returns Boolean indicating if viewport is tablet (768px - 1024px)
 */
export function useIsTablet(): boolean {
  return useMediaQuery(
    `(min-width: ${BREAKPOINTS.md}) and (max-width: ${BREAKPOINTS.lg})`
  );
}

/**
 * Hook to check if viewport is desktop size
 * @returns Boolean indicating if viewport is desktop (>= 1024px)
 */
export function useIsDesktop(): boolean {
  return useMediaQuery(`(min-width: ${BREAKPOINTS.lg})`);
}

/**
 * Hook to get current breakpoint
 * @returns Current breakpoint name or null
 */
export function useBreakpoint(): keyof typeof BREAKPOINTS | null {
  const [breakpoint, setBreakpoint] = useState<keyof typeof BREAKPOINTS | null>(
    null
  );

  useEffect(() => {
    // SSR safety check
    if (typeof window === "undefined") return;

    const updateBreakpoint = () => {
      const width = window.innerWidth;

      if (width >= parseInt(BREAKPOINTS["2xl"])) {
        setBreakpoint("2xl");
      } else if (width >= parseInt(BREAKPOINTS.xl)) {
        setBreakpoint("xl");
      } else if (width >= parseInt(BREAKPOINTS.lg)) {
        setBreakpoint("lg");
      } else if (width >= parseInt(BREAKPOINTS.md)) {
        setBreakpoint("md");
      } else if (width >= parseInt(BREAKPOINTS.sm)) {
        setBreakpoint("sm");
      } else {
        setBreakpoint(null);
      }
    };

    // Set initial breakpoint
    updateBreakpoint();

    // Add resize listener
    window.addEventListener("resize", updateBreakpoint);

    // Cleanup
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}
