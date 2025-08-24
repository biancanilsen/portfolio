import { Navbar } from "@/components/navbar";
import { ClientSections } from "./sections/ClientSections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ClientSections />
    </main>
  );
}