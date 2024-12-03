"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkillCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <Skeleton className="h-6 w-24 mb-4" />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-8 w-24" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectCardSkeleton() {
  return (
    <Card className="flex flex-col">
      <Skeleton className="h-[200px] rounded-t-lg" />
      <CardHeader>
        <Skeleton className="h-6 w-48" />
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <Skeleton className="h-24 mb-4" />
        <div className="flex flex-wrap gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-6 w-16" />
          ))}
        </div>
        <Skeleton className="h-9 w-32" />
      </CardContent>
    </Card>
  );
}

export function ContactCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-4 flex items-center space-x-4">
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-4 flex-1" />
      </CardContent>
    </Card>
  );
}