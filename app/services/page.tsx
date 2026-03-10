import DiagnosisForm from "./DiagnosisForm";
import HeroSection from "./HeroSection";
import HowWeWork from "./HowWeWork";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-16">
      <HeroSection />
      <DiagnosisForm />
      <HowWeWork />
    </div>
  );
}
