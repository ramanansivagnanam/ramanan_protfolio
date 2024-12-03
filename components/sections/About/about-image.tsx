import Image from "next/image";

export function AboutImage() {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-xl lg:h-full">
      <Image
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        alt="Developer workspace"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}