import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 S.Ramanan. Built with Next.js and Tailwind CSS.
          </p>
          <div className="flex gap-4">
            <Link href="https://linkedin.com/in/ramanansivagnanam" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:ramanansivagnanam@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}