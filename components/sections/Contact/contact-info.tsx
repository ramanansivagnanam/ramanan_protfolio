import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactCardSkeleton } from "@/components/ui/skeleton-card";
import React from "react";

interface ContactInfoProps {
  isLoading: boolean;
}

export function ContactInfo({ isLoading }: ContactInfoProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array(3).fill(0).map((_, i) => (
          <ContactCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <ContactCard icon={<Mail />} text="ramanansivagnanam@gmail.com" />
      <ContactCard icon={<Phone />} text="+91 7867046233" />
      <ContactCard icon={<MapPin />} text="Bengaluru, India" />
    </div>
  );
}

function ContactCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <Card>
      <CardContent className="p-4 flex items-center space-x-4">
        {React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5" })}
        <span>{text}</span>
      </CardContent>
    </Card>
  );
}