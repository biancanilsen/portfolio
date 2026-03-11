import CheckVanImage from "../../assets/checkVan.webp";
import EncurtadorURLImage from "../../assets/encurtadorURL.png";
import ProfilePic from "../../assets/githubb.webp";

export function useProjetos() {
  const projetos = [
    {
      title: "checkVan",
      description: "checkVanDescription",
      imageSrc: CheckVanImage,
      link: "https://github.com/biancanilsen/CheckVanFrontend",
    },
    {
      title: "encurtadorMicrosservice",
      description: "encurtadorDescription",
      imageSrc: EncurtadorURLImage,
      link: "https://github.com/biancanilsen/encurtador-url",
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
