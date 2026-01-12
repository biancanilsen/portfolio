"use client";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { Select, SelectItem } from "@heroui/select";
import Image from "next/image";
import NextLink from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import LogoPortifilioB from "../assets/logoPortifolioB.webp";

import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSelectionChange = (keys: any) => {
    const language = Array.from(keys)[0] as string;

    if (language) {
      i18n.changeLanguage(language);
    }
  };

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <div className="relative w-10 h-10">
              <Image
                fill
                priority
                alt="Logo Bianca Nilsen"
                src={LogoPortifilioB}
                style={{ objectFit: "contain" }}
              />
            </div>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2 items-center">
          <Link
            isExternal
            aria-label="Linkedin"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>

          <ThemeSwitch />

          {/* SELECT DESKTOP */}
          {mounted && (
            <Select
              disallowEmptySelection
              aria-label="Selecionar idioma"
              className="w-45 ml-2"
              selectedKeys={[i18n.language]}
              selectionMode="single"
              size="sm"
              variant="flat"
              onSelectionChange={handleSelectionChange}
            >
              <SelectItem key="pt" startContent="🇧🇷">
                Português
              </SelectItem>
              <SelectItem key="en" startContent="🇺🇸">
                English
              </SelectItem>
              <SelectItem key="es" startContent="🇪🇸">
                Español
              </SelectItem>
            </Select>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-4 mb-2">
          {/* SELECT MOBILE */}
          {mounted && (
            <Select
              className="w-full max-w-xs"
              label="Idioma / Language"
              selectedKeys={[i18n.language]}
              selectionMode="single"
              size="sm"
              variant="bordered"
              onSelectionChange={handleSelectionChange}
            >
              <SelectItem key="pt" startContent="🇧🇷">
                Português
              </SelectItem>
              <SelectItem key="en" startContent="🇺🇸">
                English
              </SelectItem>
              <SelectItem key="es" startContent="🇪🇸">
                Español
              </SelectItem>
            </Select>
          )}
        </div>

        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
