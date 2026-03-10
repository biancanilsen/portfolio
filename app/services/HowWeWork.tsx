import { Coffee, FileText, Code, Key } from "lucide-react";

const steps = [
  {
    icon: Coffee,
    title: "Diagnóstico",
    description:
      "Reunião de 30 min para alinhamento de expectativas (sem custo).",
  },
  {
    icon: FileText,
    title: "Proposta Técnica",
    description: "Envio de escopo detalhado e cronograma em até 72h.",
  },
  {
    icon: Code,
    title: "Desenvolvimento Ágil",
    description: "Entregas incrementais com feedback constante.",
  },
  {
    icon: Key,
    title: "Suporte & Handover",
    description: "Treinamento e entrega de todo o código e documentação.",
  },
];

export default function HowWeWork() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Como Trabalho</h2>
      <p className="text-default-500 text-center mb-12 max-w-2xl mx-auto">
        Executo um processo transparente e colaborativo, garantindo que cada etapa
        seja clara e alinhada com seus objetivos.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-default-200 bg-white/5 dark:bg-black/5 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 text-[#998684]">
              <step.icon className="w-8 h-8" />
            </div>
            <div className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold bg-[#998684]">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-default-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-default-400 text-sm">
        <p>
          Trabalho com metodologias ágeis (Scrum/Kanban) e mantenho você
          atualizado em cada fase do projeto.
        </p>
      </div>
    </div>
  );
}
