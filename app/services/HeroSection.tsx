"use client"; 

import { title, subtitle } from "@/components/primitives";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className={title({ size: "lg" })}>
        {t("services.title")}
      </h1>
      <p className={subtitle({ class: "mt-6" })}>
        {t("services.subtitle")}
      </p>
    </div>
  );
}
