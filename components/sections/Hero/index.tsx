"use client";

import { SocialLinks } from "./social-links";
import { HeroContent } from "./hero-content";

export function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 py-16 md:py-24">
      <HeroContent />
      <SocialLinks />
    </section>
  );
}