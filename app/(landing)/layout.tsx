import React from "react";
import { Navbar } from "@/components/shared/navbar";

/**
 * Landing page layout wrapper
 * Use this layout to add landing-specific providers, analytics, or wrappers
 */
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
