"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillIcon } from "@/components/icons/SkillIcon";
import { SkillCardSkeleton } from "@/components/ui/skeleton-card";
import { useEffect, useState } from "react";

const skills = {
  "Frontend": ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "TypeScript"],
  "Backend": ["Java", "NodeJS", "Spring Boot", "JPA", "Hibernate", "MolecularJS"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
  "Cloud & Tools": ["Docker", "Kubernetes", "GCP", "Git", "Postman", "Jaspersoft", "Xcode", "Android Studio"],
};

export function Skills() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="container py-24 sm:py-32 bg-muted/50">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Skills & Expertise
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          Array(4).fill(0).map((_, i) => <SkillCardSkeleton key={i} />)
        ) : (
          Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="flex items-center gap-2">
                      <SkillIcon name={skill} />
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </section>
  );
}