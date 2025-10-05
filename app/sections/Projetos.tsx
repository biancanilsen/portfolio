import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import Image from "next/image";
import { Link } from "@heroui/link";
import { useProjetos } from "../hooks/useProjetos";
import { Tooltip } from "@heroui/tooltip";

export function Projetos() {
  const { projetos } = useProjetos();

  return (
    <section className="w-full py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">
          Explore alguns projetos que já desenvolvi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto, index) => (
            <Card
              key={index}
              className="group bg-neutral-800 text-white
                         hover:bg-[#6371A2] hover:text-black
                         transition-colors duration-300 flex flex-col"
            >
              <CardHeader className="flex justify-center">
                <div className="relative w-full h-48 overflow-hidden rounded-md">
                  <Image
                    src={projeto.imageSrc}
                    alt={projeto.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </CardHeader>
              <CardBody className="p-6 flex-grow">
                <h3 className="font-bold text-lg mb-2 overflow-hidden whitespace-nowrap text-ellipsis" title={projeto.title}>
                  {projeto.title}
                </h3>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-800 transition-colors duration-300 text-ellipsis" title={projeto.description}>
                  {projeto.description}
                </p>
              </CardBody>
              <CardFooter className="justify-center py-4">
                <Link
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#998684] group-hover:text-black transition-colors duration-300 cursor-pointer"
                >
                  Ver detalhes
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
