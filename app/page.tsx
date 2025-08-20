import About from "@/components/About";
import FavoriteDestinations from "@/components/FavoriteDestinations";
import Hero from "@/components/Hero";
import UNESCOHeritages from "@/components/UNESCOHeritages";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FavoriteDestinations />
      <UNESCOHeritages />
      <CTA />
    </>
  )
}
