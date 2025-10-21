import { useEffect, useState } from "react";

/**
 * Hook to check if component is mounted (SSR safety)
 * Useful for preventing hydration mismatches in Next.js
 *
 * @returns Boolean indicating if component is mounted on client
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isMounted = useMounted();
 *
 *   if (!isMounted) {
 *     return null; // or return skeleton/placeholder
 *   }
 *
 *   return <div>{window.innerWidth}</div>; // Safe to use window
 * }
 * ```
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
