"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export function SobreMim() {
  const { t } = useTranslation();

  return (
    <section id="sobre-mim" className="w-full py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Sobre mim</h2>
        <p className="text-lg text-neutral-400 mb-12">{t("sejaBemVindo")}</p>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="text-9xl font-bold text-[#998684]">4+</div>

          <div className="text-lg text-neutral-400 max-w-3xl leading-relaxed">
            <p>{t("minhaTragetoria")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
