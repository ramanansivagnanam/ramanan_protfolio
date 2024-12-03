"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactCardSkeleton } from "@/components/ui/skeleton-card";
import { useEffect, useState } from "react";

export function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:ramanansivagnanam@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
        Get in Touch
      </h2>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <div className="space-y-4">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => <ContactCardSkeleton key={i} />)
            ) : (
              <>
                <Card>
                  <CardContent className="p-4 flex items-center space-x-4">
                    <Mail className="h-5 w-5" />
                    <span>ramanansivagnanam@gmail.com</span>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center space-x-4">
                    <Phone className="h-5 w-5" />
                    <span>+91 7867046233</span>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center space-x-4">
                    <MapPin className="h-5 w-5" />
                    <span>Bengaluru, India</span>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Textarea
            placeholder="Your Message"
            className="min-h-[150px]"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}