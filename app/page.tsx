import About from "@/components/About";
import Camp from "@/components/Camp";
import FavoriteDestinations from "@/components/FavoriteDestinations";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FavoriteDestinations />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}
