"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Analytics component for tracking page views and events
 * TODO: Add analytics providers:
 * - Vercel Analytics: npm install @vercel/analytics
 * - Google Analytics: npm install @next/third-parties
 * - PostHog: npm install posthog-js
 * - Plausible Analytics
 */
export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname, searchParams]);

  return null;
}

/**
 * Track page view
 * TODO: Implement with your analytics provider
 */
function trackPageView(url: string) {
  // Example: Google Analytics
  // if (typeof window.gtag !== 'undefined') {
  //   window.gtag('config', 'GA_MEASUREMENT_ID', {
  //     page_path: url,
  //   });
  // }

  // Example: Vercel Analytics
  // import { track } from '@vercel/analytics';
  // track('pageview', { path: url });

  if (process.env.NODE_ENV === "development") {
    console.log("📊 Page view:", url);
  }
}

/**
 * Track custom event
 * TODO: Implement with your analytics provider
 * @param eventName - Name of the event
 * @param properties - Event properties
 */
export function trackEvent(
  eventName: string,
  properties?: Record<string, any>
) {
  // Example: Google Analytics
  // if (typeof window.gtag !== 'undefined') {
  //   window.gtag('event', eventName, properties);
  // }

  // Example: PostHog
  // import posthog from 'posthog-js';
  // posthog.capture(eventName, properties);

  if (process.env.NODE_ENV === "development") {
    console.log("📊 Event:", eventName, properties);
  }
}

/**
 * Identify user (for analytics and CRM)
 * TODO: Implement with your analytics provider
 * @param userId - User ID
 * @param traits - User traits/properties
 */
export function identifyUser(
  userId: string,
  traits?: Record<string, any>
) {
  // Example: PostHog
  // import posthog from 'posthog-js';
  // posthog.identify(userId, traits);

  // Example: Segment
  // analytics.identify(userId, traits);

  if (process.env.NODE_ENV === "development") {
    console.log("👤 Identify user:", userId, traits);
  }
}
