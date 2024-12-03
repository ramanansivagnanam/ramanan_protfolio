import { Card, CardContent } from "@/components/ui/card";

export function AboutContent() {
  return (
    <div className="flex flex-col justify-center space-y-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
      <p className="text-muted-foreground">
        Experienced Software Engineer with a passion for learning and creativity, equipped with a polyglot mindset. 
        I thrive in teamwork environments and excel individually, focusing on delivering high-quality solutions.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <InfoCard title="Experience" description="4+ years of professional experience" />
        <InfoCard title="Education" description="B.E. Computer Science - KSRCT" />
      </div>
    </div>
  );
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}