"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { useHabilidades } from "../hooks/useHabilidades";

export function Habilidades() {
  const { habilidades } = useHabilidades();

  return (
    <section className="w-full py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Principais habilidades</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {habilidades.map((habilidade, index) => (
            <Card
              key={index}
              className="group p-6 text-left bg-neutral-800 text-white cursor-pointer
                         hover:bg-[#998684] hover:text-black 
                         transition-colors duration-300"
            >
              <CardHeader className="flex flex-col items-start gap-4">
                <div className="text-[#6371A2] group-hover:text-black transition-colors duration-300">
                  {habilidade.icon}
                </div>
                <h3 className="font-bold text-lg leading-tight">
                  {habilidade.title}
                </h3>
              </CardHeader>
              <CardBody className="pt-2">
                <p className="text-sm text-neutral-400 group-hover:text-neutral-800 transition-colors duration-300">
                  {habilidade.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
