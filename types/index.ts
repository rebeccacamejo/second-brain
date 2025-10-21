/**
 * Waitlist entry interface
 */
export interface WaitlistEntry {
  email: string;
  createdAt: Date | string;
  source?: string;
  id?: string;
}

/**
 * Generic API response wrapper
 * @template T - The type of data returned in the response
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * User interface for future authentication
 */
export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  role?: "user" | "admin";
  createdAt: Date | string;
  updatedAt?: Date | string;
}

/**
 * Feature interface for landing page
 */
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  category?: string;
}

/**
 * Pricing plan interface
 */
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: "month" | "year";
  features: string[];
  popular?: boolean;
  cta?: string;
}

/**
 * FAQ item interface
 */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

/**
 * Form field error type
 */
export interface FormError {
  field: string;
  message: string;
}

/**
 * Testimonial interface
 */
export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  avatar?: string;
  content: string;
  rating?: number;
}
