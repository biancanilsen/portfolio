import { Habilidades } from "./sections/Habilidades";
import { HeroSection } from "./sections/HeroSection";
import { Projetos } from "./sections/Projetos";
import { SobreMim } from "./sections/SobreMim";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SobreMim />
      <Habilidades />
      <Projetos />
    </main>
  );
}
