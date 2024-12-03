import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="text-muted-foreground">
            Experienced Software Engineer with a passion for learning and creativity, equipped with a polyglot mindset. 
            I thrive in teamwork environments and excel individually, focusing on delivering high-quality solutions.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold">Experience</h3>
                <p className="text-sm text-muted-foreground">4+ years of professional experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold">Education</h3>
                <p className="text-sm text-muted-foreground">B.E. Computer Science - KSRCT</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            alt="Developer workspace"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}