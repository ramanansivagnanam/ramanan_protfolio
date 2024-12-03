"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ProjectCardSkeleton } from "@/components/ui/skeleton-card";
import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Visible Platform",
    description: "Improved web application performance by migrating legacy code to ReactJS and optimized React Native app, reducing bundle size by 20%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
    tags: ["React", "Next.js", "TypeScript", "React Native"],
    demo: "#",
  },
  {
    title: "Sova Framework",
    description: "Developed 20+ React components for a low-code framework and implemented core logic using Spring Boot with PostgreSQL integration.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
    tags: ["React", "Spring Boot", "PostgreSQL"],
    demo: "#",
  },
  {
    title: "Honeycomb",
    description: "Developed and deployed a hybrid mobile application using React Native and MongoDB, successfully launched on the Play Store.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2674&q=80",
    tags: ["React Native", "MongoDB", "GCP"],
    demo: "#",
  },
];

export function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array(3).fill(0).map((_, i) => <ProjectCardSkeleton key={i} />)
        ) : (
          projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <div className="relative h-[200px] overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </section>
  );
}