import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I'm <span className="text-primary">S.Ramanan</span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Experience Engineer at Publicis Sapient with expertise in React, Next.js, and Spring Boot. 
        Passionate about delivering transformative solutions with inclusion at the core.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild>
          <a href="mailto:ramanansivagnanam@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://linkedin.com/in/ramanansivagnanam" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
}