import { amhara } from "@/app/fonts";

interface LogoProps {
  isScrolled?: boolean;
}

export default function Logo({ isScrolled = false }: LogoProps) {
  return (
    <h1 className={`${amhara.variable} text-3xl md:text-4xl font-normal transition-colors duration-300`} style={{ fontFamily: "var(--font-amhara)" }}>
      <span className={isScrolled ? "text-black" : "text-white"}>Visit </span>
      <span className="text-green-600">E</span>
      <span className="text-yellow-500">t</span>
      <span className="text-red-600">hiopia</span>
    </h1>
  );
}
