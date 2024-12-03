"use client";

import { useState, useEffect } from "react";
import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";

export function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">
        Get in Touch
      </h2>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <ContactInfo isLoading={isLoading} />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}