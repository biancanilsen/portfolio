"use client";
import React from 'react';
import { FaJava, FaReact, FaCheckCircle } from 'react-icons/fa';
import { FaPersonChalkboard } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

export function useHabilidades() {
  const { t } = useTranslation();
  
  const habilidades = [
    {
      icon: <FaReact size={28} />,
      title: t("desenvolvimentoFrontendModerno"),
      description: t("crioInterfaces"),
    },
    {
      icon: <FaJava size={28} />,
      title: t("arquiteturaBackend"),
      description: t("desenvolvoLogicaServidor")
    },
    {
      icon: <FaCheckCircle size={28} />,
      title: t("resolucaoProblemas"),
      description: t("tenhoAbordagemAnalitica")
    },
    {
      icon: <FaPersonChalkboard size={28} />,
      title: t("comunicacaoColaboracaoAgil"),
      description: t("comunicacaoClaraBase"),
    },
  ];

  return { habilidades };
}