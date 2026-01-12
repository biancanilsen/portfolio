"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("../sections/HeroSection").then((mod) => mod.HeroSection),
  { ssr: false },
);
const SobreMim = dynamic(
  () => import("../sections/SobreMim").then((mod) => mod.SobreMim),
  { ssr: false },
);
const Habilidades = dynamic(
  () => import("../sections/Habilidades").then((mod) => mod.Habilidades),
  { ssr: false },
);
const Projetos = dynamic(
  () => import("../sections/Projetos").then((mod) => mod.Projetos),
  { ssr: false },
);

export function ClientSections() {
  return (
    <>
      <HeroSection />
      <SobreMim />
      <Habilidades />
      <Projetos />
    </>
  );
}
