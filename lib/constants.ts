/**
 * Site configuration constants
 */

export const SITE_NAME = "secondbrain";

export const SITE_DESCRIPTION = "Your AI-powered companion for mastering any skill";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

/**
 * Navigation links
 */
export const NAV_LINKS = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
] as const;

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/secondbrain",
  github: "https://github.com/secondbrain",
  linkedin: "https://linkedin.com/company/secondbrain",
} as const;

/**
 * Contact information
 */
export const CONTACT = {
  email: "hello@secondbrain.ai",
  support: "support@secondbrain.ai",
} as const;
