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
import Image from 'next/image';
import NextLink from "next/link";
import LogoPortifilioB from "../assets/logoPortifolioB.webp";

import {
  GithubIcon,
  LinkedinIcon
} from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react"; 

export const Navbar = () => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSelectionChange = (keys: any) => {
    const language = Array.from(keys)[0] as string;
    console.log(`Changing language to: ${language}`);
    
    if (language) {
      i18n.changeLanguage(language);
    }

    console.log(console.log(`Language changed to: ${i18n.language}`));
  };

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <div className="relative w-10 h-10">
              <Image
                src={LogoPortifilioB}
                alt="Logo Bianca Nilsen"
                fill
                style={{ objectFit: 'contain' }}
                priority
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
              className="w-45 ml-2"
              size="sm"
              aria-label="Selecionar idioma"
              selectedKeys={[i18n.language]} 
              onSelectionChange={handleSelectionChange} 
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
            >
              <SelectItem key="pt" startContent="🇧🇷">Português</SelectItem>
              <SelectItem key="en" startContent="🇺🇸">English</SelectItem>
              <SelectItem key="es" startContent="🇪🇸">Español</SelectItem>
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
                size="sm"
                selectedKeys={[i18n.language]}
                onSelectionChange={handleSelectionChange} 
                variant="bordered"
                selectionMode="single"
              >
                <SelectItem key="pt" startContent="🇧🇷">Português</SelectItem>
                <SelectItem key="en" startContent="🇺🇸">English</SelectItem>
                <SelectItem key="es" startContent="🇪🇸">Español</SelectItem>
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