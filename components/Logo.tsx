import { amhara } from "@/app/fonts";

interface LogoProps {
  isScrolled?: boolean;
  is404?: boolean;
}

export default function Logo({ isScrolled = false, is404 = false }: LogoProps) {
  const visitClass = is404 ? 'text-white' : (isScrolled ? 'text-black' : 'text-white')
  return (
    <h1 className={`${amhara.variable} text-2xl md:text-3xl font-normal transition-colors duration-300`} style={{ fontFamily: "var(--font-amhara)" }}>
      <span className={visitClass}>Visit </span>
      <span className="text-green-600">E</span>
      <span className="text-yellow-500">t</span>
      <span className="text-red-600">hiopia</span>
    </h1>
  );
}
