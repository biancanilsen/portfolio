import React from "react";
import ProfilePic from "../../assets/githubb.webp";
import CheckVanImage from "../../assets/checkVan.webp";

export function useProjetos() {
  const projetos = [
    {
      title: "CHECK VAN",
      description:
        "O Check Van é o aplicativo completo que conecta pais e motoristas para simplificar e trazer mais segurança à rotina do transporte escolar. Com ele, é possível gerar rotas otimizadas, gerenciar alunos, organizar viagens e muito mais, tudo na palma da sua mão.",
      imageSrc: CheckVanImage,
      link: "https://github.com/biancanilsen/CheckVanFrontend",
    },
    {
      title: "TODO - Sistemas distribuídos",
      description: "TODO",
      imageSrc: ProfilePic,
      link: "#",
    },
    {
      title: "TODO - DDD",
      description: "TODO",
      imageSrc: ProfilePic,
      link: "#",
    },
    {
      title: "TODO - Spring + Hibernate + Quartus",
      description: "TODO",
      imageSrc: ProfilePic,
      link: "#",
    },
    {
      title: "TODO - MongoDB (Banco não relacional)",
      description: "TODO",
      imageSrc: ProfilePic,
      link: "#",
    },
    {
      title: "TODO - Jenkins",
      description: "TODO",
      imageSrc: ProfilePic,
      link: "#",
    },
    {
      title: "TODO - CI/CD",
      description: "TODO",
      imageSrc: ProfilePic,
      link: "#",
    },
    {
      title: "TODO - Segurança da informação",
      description: "TODO",
      imageSrc: ProfilePic,
      link: "#",
    },
    {
      title: "TODO - API Restful (integração)",
      description: "TODO",
      imageSrc: ProfilePic,
      link: "#",
    },
    {
      title: "TODO - Inteligência artificial generativa",
      description: "TODO",
      imageSrc: ProfilePic,
      link: "#",
    },
    {
      title: "TODO - Certificação AWS",
      description: "TODO",
      imageSrc: ProfilePic,
      link: "#",
    },
  ];

  return { projetos };
}
