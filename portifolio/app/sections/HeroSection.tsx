"use client";

import { title } from "@/components/primitives";
import ProfilePic from "../../assets/profileBia.png";
import { useTranslation } from "react-i18next";
import Image from 'next/image';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-0 md:py-5">
      <div className="container mx-auto px-2">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12 text-left order-2 lg:order-1 mt-8 lg:mt-0">
            <h2 className="text-xl font-light text-neutral-400">
              {t("greeting")}
            </h2>

            <span className={`${title()} text-[#6371A2]`}>
              Bianca Nilsen&nbsp;
            </span>

            <p className="py-3 text-lg max-w-md text-neutral-400">
              {t("saudacaoInicial")}
            </p>

            <a href="#sobre-mim" className="btn btn-primary">
              <span className="flex items-center text-neutral-400">
                {t("aboutMe")} <span className="ml-2">→</span>
              </span>
            </a>
          </div>
            <div className="relative rounded-full overflow-hidden w-80 h-80 md:w-96 md:h-96 mx-auto order-1 lg:order-2">
              <Image
                src={ProfilePic}
                alt="Bianca Nilsen"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
        </div>
      </div>
    </section>
  );
}
