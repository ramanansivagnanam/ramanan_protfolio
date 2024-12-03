import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function SocialLinks() {
  return (
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
  );
}