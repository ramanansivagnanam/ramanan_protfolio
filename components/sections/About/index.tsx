import { AboutContent } from "./about-content";
import { AboutImage } from "./about-image";

export function About() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-2">
        <AboutContent />
        <AboutImage />
      </div>
    </section>
  );
}