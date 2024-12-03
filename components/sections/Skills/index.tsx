"use client";

import { useState, useEffect } from "react";
import { SkillCard } from "./skill-card";
import { skillCategories } from "./skill-categories";
import { SkillCardSkeleton } from "@/components/ui/skeleton-card";

export function Skills() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="container py-24 sm:py-32 bg-muted/50">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16 text-center">
        Skills & Expertise
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {isLoading
          ? Array(4).fill(0).map((_, i) => <SkillCardSkeleton key={i} />)
          : Object.entries(skillCategories).map(([category, skills]) => (
              <SkillCard key={category} category={category} skills={skills as readonly string[]} />
            ))
        }
      </div>
    </section>
  );
}