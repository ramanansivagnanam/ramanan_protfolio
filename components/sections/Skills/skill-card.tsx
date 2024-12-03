import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillIcon } from "@/components/icons/SkillIcon";

interface SkillCardProps {
  category: string;
  skills: readonly string[]
}

export function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-4">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="flex items-center gap-2">
              <SkillIcon name={skill} />
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}