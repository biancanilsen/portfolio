"use client";

import { useTranslation } from "react-i18next";

import { title, subtitle } from "@/components/primitives";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className={`${title({ size: "sm" })} text-[#6371A2]`}>
        {t("services.title")}
      </h1>
      <p
        className={subtitle({ class: "mt-6 font font-light text-neutral-400" })}
      >
        {t("services.subtitle")}
      </p>
    </div>
  );
}
