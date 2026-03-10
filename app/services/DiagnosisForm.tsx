"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import { Send } from "lucide-react";

type FormData = {
  fullName: string;
  linkedinUrl: string;
  solutionType: string;
  businessProblem: string;
  mustHaveFeatures: string;
  budget: string;
  timeline: string;
};

const solutionTypes = [
  { label: "Web App - Site", value: "web-app" },
  { label: "Mobile App - Aplicativo", value: "mobile-app" },
  { label: "MVP de SaaS", value: "mvp-saas" },
  { label: "Automação/Bots", value: "automation-bots" },
  { label: "Consultoria Técnica", value: "technical-consulting" },
];

const budgetOptions = [
  { label: "~ - 5k", value: "0k-5k" },
  { label: "R$ 5k - 10k", value: "5k-10k" },
  { label: "R$ 10k - 30k", value: "10k-30k" },
  { label: "Acima de R$ 30k", value: "30k-plus" },
];

const timelineOptions = [
  { label: "< 1 mês", value: "less-than-1-month" },
  { label: "1 a 3 meses", value: "1-3-months" },
  { label: "3+ meses", value: "3-plus-months" },
];

export default function DiagnosisForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setIsSuccess(false);

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      // Fallback to mock submission (for development)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 3000);

      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Form submission error:", error);
      setSubmitError(
        "Houve um problema ao enviar o formulário. Por favor, tente novamente ou entre em contato diretamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white/5 dark:bg-black/5 rounded-2xl border border-default-200 shadow-lg">
      <h2 className="text-3xl font-bold mb-2 text-center">
        Diagnóstico Estratégico
      </h2>
      <p className="text-default-500 text-center mb-8 font-light">
        Preencha os campos abaixo para que eu possa entender sua necessidade e
        elaborar uma proposta personalizada.
      </p>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Controller
            control={control}
            name="fullName"
            render={({ field }) => (
              <Input
                {...field}
                isRequired
                errorMessage={errors.fullName && "Nome é obrigatório"}
                label="Nome Completo"
                placeholder="Seu nome completo"
                variant="bordered"
              />
            )}
            rules={{ required: true }}
          />
          <Controller
            control={control}
            name="linkedinUrl"
            render={({ field }) => (
              <Input
                {...field}
                description="Opcional, mas ajuda a conhecer seu perfil profissional"
                label="Link do LinkedIn"
                placeholder="https://linkedin.com/in/seu-perfil"
                variant="bordered"
              />
            )}
          />
        </div>

        <Controller
          control={control}
          name="solutionType"
          render={({ field }) => (
            <Select
              isRequired
              errorMessage={
                errors.solutionType && "Selecione um tipo de solução"
              }
              label="Tipo de Solução"
              placeholder="Selecione uma opção"
              selectedKeys={field.value ? [field.value] : []}
              variant="bordered"
              onSelectionChange={(keys: any) =>
                field.onChange(Array.from(keys)[0] || "")
              }
            >
              {solutionTypes.map((type) => (
                <SelectItem key={type.value}>{type.label}</SelectItem>
              ))}
            </Select>
          )}
          rules={{ required: true }}
        />

        <div>
          <label
            className="block text-sm font-medium text-default-700 mb-2"
            htmlFor="businessProblem"
          >
            Problema de Negócio <span className="text-danger">*</span>
          </label>
          <Controller
            control={control}
            name="businessProblem"
            render={({ field }) => (
              <textarea
                {...field}
                className="w-full p-3 border border-default-300 rounded-xl bg-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                id="businessProblem"
                placeholder="Qual dor ou processo você deseja resolver/automatizar?"
                rows={4}
              />
            )}
            rules={{ required: true }}
          />
          {errors.businessProblem && (
            <p className="text-danger text-sm mt-1">Descreva o problema</p>
          )}
        </div>

        <div>
          <label
            className="block text-sm font-medium text-default-700 mb-2"
            htmlFor="mustHaveFeatures"
          >
            Funcionalidades {"Must-Have"} <span className="text-danger">*</span>
          </label>
          <Controller
            control={control}
            name="mustHaveFeatures"
            render={({ field }) => (
              <textarea
                {...field}
                className="w-full p-3 border border-default-300 rounded-xl bg-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                id="mustHaveFeatures"
                placeholder="O que o sistema não pode deixar de ter?"
                rows={4}
              />
            )}
            rules={{ required: true }}
          />
          {errors.mustHaveFeatures && (
            <p className="text-danger text-sm mt-1">
              Liste as funcionalidades essenciais
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Controller
            control={control}
            name="budget"
            render={({ field }) => (
              <Select
                isRequired
                errorMessage={
                  errors.budget && "Selecione uma faixa de orçamento"
                }
                label="Orçamento (Budget)"
                placeholder="Selecione uma faixa"
                selectedKeys={field.value ? [field.value] : []}
                variant="bordered"
                onSelectionChange={(keys: any) =>
                  field.onChange(Array.from(keys)[0] || "")
                }
              >
                {budgetOptions.map((opt) => (
                  <SelectItem key={opt.value}>{opt.label}</SelectItem>
                ))}
              </Select>
            )}
            rules={{ required: true }}
          />

          <Controller
            control={control}
            name="timeline"
            render={({ field }) => (
              <Select
                isRequired
                errorMessage={errors.timeline && "Selecione um prazo"}
                label="Prazo Estimado"
                placeholder="Selecione um prazo"
                selectedKeys={field.value ? [field.value] : []}
                variant="bordered"
                onSelectionChange={(keys: any) =>
                  field.onChange(Array.from(keys)[0] || "")
                }
              >
                {timelineOptions.map((opt) => (
                  <SelectItem key={opt.value}>{opt.label}</SelectItem>
                ))}
              </Select>
            )}
            rules={{ required: true }}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Button
            className="min-w-48 bg-[#6371A2] text-white"
            endContent={!isSubmitting && <Send className="w-4 h-4" />}
            isLoading={isSubmitting}
            size="lg"
            type="submit"
          >
            {isSubmitting
              ? "Enviando..."
              : isSuccess
                ? "Enviado com sucesso!"
                : "Enviar Diagnóstico"}
          </Button>
        </div>

        {isSuccess && (
          <p className="text-success text-center text-sm">
            Obrigado! Entrarei em contato em até 48h para marcarmos uma reunião de alinhamento inicial.
          </p>
        )}
        {submitError && (
          <p className="text-danger text-center text-sm">{submitError}</p>
        )}
      </form>

      <p className="text-default-400 text-sm mt-8 text-center">
        Este formulário é o primeiro passo para um projeto bem‑sucedido. Todas
        as informações serão tratadas com confidencialidade.
      </p>
    </div>
  );
}
