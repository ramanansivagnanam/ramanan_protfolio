export function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I'm <span className="text-primary">S.Ramanan</span>
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Experience Engineer at Publicis Sapient with expertise in React, Next.js, and Spring Boot. 
        Passionate about delivering transformative solutions with inclusion at the core.
      </p>
    </div>
  );
}