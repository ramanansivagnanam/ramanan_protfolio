"use client";

import Image from "next/image";

const iconMap = {
  // Frontend
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  ReactJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  NextJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  
  // Backend
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  NodeJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  
  // Databases
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  
  // Cloud & Tools
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  GCP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Xcode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg",
  "Android Studio": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
};

interface SkillIconProps {
  name: string;
  className?: string;
}

export function SkillIcon({ name, className = "" }: SkillIconProps) {
  const iconUrl = iconMap[name as keyof typeof iconMap];
  
  if (!iconUrl) {
    return null;
  }

  return (
    <div className={`relative w-6 h-6 ${className}`}>
      <Image
        src={iconUrl}
        alt={`${name} icon`}
        width={24}
        height={24}
        className="object-contain"
      />
    </div>
  );
}