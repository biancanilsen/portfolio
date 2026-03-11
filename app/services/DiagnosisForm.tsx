"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
import { Send } from "lucide-react";

type FormData = {
  fullName: string;
  linkedinUrl: string;
  email: string;
  whatsapp: string;
  company: string;
  solutionType: string;
  businessProblem: string;
  mustHaveFeatures: string;
  budget: string;
  timeline: string;
  projectStage: string;
  howMet: string;
};

export default function DiagnosisForm() {
  const { t } = useTranslation();
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
      setSubmitError(t("diagnosisForm.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Build option arrays from translation keys
  const solutionTypes = [
    {
      label: t("diagnosisForm.options.solutionTypes.web-app"),
      value: "web-app",
    },
    {
      label: t("diagnosisForm.options.solutionTypes.mobile-app"),
      value: "mobile-app",
    },
    {
      label: t("diagnosisForm.options.solutionTypes.mvp-saas"),
      value: "mvp-saas",
    },
    {
      label: t("diagnosisForm.options.solutionTypes.automation-bots"),
      value: "automation-bots",
    },
    {
      label: t("diagnosisForm.options.solutionTypes.technical-consulting"),
      value: "technical-consulting",
    },
  ];

  const budgetOptions = [
    { label: t("diagnosisForm.options.budgetOptions.0k-5k"), value: "0k-5k" },
    { label: t("diagnosisForm.options.budgetOptions.5k-10k"), value: "5k-10k" },
    {
      label: t("diagnosisForm.options.budgetOptions.10k-30k"),
      value: "10k-30k",
    },
    {
      label: t("diagnosisForm.options.budgetOptions.30k-plus"),
      value: "30k-plus",
    },
  ];

  const timelineOptions = [
    {
      label: t("diagnosisForm.options.timelineOptions.less-than-1-month"),
      value: "less-than-1-month",
    },
    {
      label: t("diagnosisForm.options.timelineOptions.1-3-months"),
      value: "1-3-months",
    },
    {
      label: t("diagnosisForm.options.timelineOptions.3-plus-months"),
      value: "3-plus-months",
    },
  ];

  const projectStageOptions = [
    {
      label: t("diagnosisForm.fields.projectStage.options.idea"),
      value: "idea",
    },
    {
      label: t("diagnosisForm.fields.projectStage.options.prototype"),
      value: "prototype",
    },
    {
      label: t("diagnosisForm.fields.projectStage.options.production"),
      value: "production",
    },
  ];

  const howMetOptions = [
    {
      label: t("diagnosisForm.fields.howMet.options.linkedin"),
      value: "linkedin",
    },
    { label: t("diagnosisForm.fields.howMet.options.github"), value: "github" },
    {
      label: t("diagnosisForm.fields.howMet.options.referral"),
      value: "referral",
    },
    { label: t("diagnosisForm.fields.howMet.options.other"), value: "other" },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white/5 dark:bg-black/5 rounded-2xl border border-default-200 shadow-lg">
      <h2 className="text-3xl font-bold mb-2 text-center">
        {t("diagnosisForm.title")}
      </h2>
      <p className="text-default-500 text-center mb-8 font-light">
        {t("diagnosisForm.description")}
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
                errorMessage={
                  errors.fullName && t("diagnosisForm.fields.fullName.error")
                }
                label={t("diagnosisForm.fields.fullName.label")}
                placeholder={t("diagnosisForm.fields.fullName.placeholder")}
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
                description={t("diagnosisForm.fields.linkedinUrl.description")}
                label={t("diagnosisForm.fields.linkedinUrl.label")}
                placeholder={t("diagnosisForm.fields.linkedinUrl.placeholder")}
                variant="bordered"
              />
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                isRequired
                errorMessage={
                  errors.email && t("diagnosisForm.fields.email.error")
                }
                label={t("diagnosisForm.fields.email.label")}
                placeholder={t("diagnosisForm.fields.email.placeholder")}
                type="email"
                variant="bordered"
              />
            )}
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
          />
          <Controller
            control={control}
            name="whatsapp"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Input
                ref={ref}
                isRequired
                errorMessage={errors.whatsapp?.message}
                isInvalid={!!errors.whatsapp}
                label={t("diagnosisForm.fields.whatsapp.label")}
                placeholder="(99) 99999-9999"
                value={value}
                variant="bordered"
                onBlur={onBlur}
                onChange={(e) => {
                  // Lógica simples de máscara manual para não quebrar o DOM
                  const val = e.target.value.replace(/\D/g, "").slice(0, 11);
                  let masked = val;

                  if (val.length > 2)
                    masked = `(${val.slice(0, 2)}) ${val.slice(2)}`;
                  if (val.length > 7)
                    masked = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
                  onChange(masked);
                }}
              />
            )}
            rules={{
              required: t("diagnosisForm.fields.whatsapp.error"),
              pattern: {
                value: /^\(\d{2}\) \d{5}-\d{4}$/,
                message: t("diagnosisForm.fields.whatsapp.error"), // Ou uma chave de "formato inválido"
              },
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Controller
            control={control}
            name="company"
            render={({ field }) => (
              <Input
                {...field}
                label={t("diagnosisForm.fields.company.label")}
                placeholder={t("diagnosisForm.fields.company.placeholder")}
                variant="bordered"
              />
            )}
          />
          <Controller
            control={control}
            name="projectStage"
            render={({ field }) => (
              <Select
                isRequired
                errorMessage={
                  errors.projectStage &&
                  t("diagnosisForm.fields.projectStage.error")
                }
                label={t("diagnosisForm.fields.projectStage.label")}
                placeholder={t("diagnosisForm.fields.projectStage.placeholder")}
                selectedKeys={field.value ? [field.value] : []}
                variant="bordered"
                onSelectionChange={(keys: any) =>
                  field.onChange(Array.from(keys)[0] || "")
                }
              >
                {projectStageOptions.map((opt) => (
                  <SelectItem key={opt.value}>{opt.label}</SelectItem>
                ))}
              </Select>
            )}
            rules={{ required: true }}
          />
        </div>

        <Controller
          control={control}
          name="solutionType"
          render={({ field }) => (
            <Select
              isRequired
              errorMessage={
                errors.solutionType &&
                t("diagnosisForm.fields.solutionType.error")
              }
              label={t("diagnosisForm.fields.solutionType.label")}
              placeholder={t("diagnosisForm.fields.solutionType.placeholder")}
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
            className={`block text-sm font-medium mb-2 ${
              errors.businessProblem ? "text-danger" : "text-default-700"
            }`}
            htmlFor="businessProblem"
          >
            {t("diagnosisForm.fields.businessProblem.label")}{" "}
            <span className="text-danger">*</span>
          </label>
          <Controller
            control={control}
            name="businessProblem"
            rules={{
              required: t("diagnosisForm.fields.businessProblem.error"),
            }} // Adicionado a mensagem aqui
            render={({ field }) => (
              <textarea
                {...field}
                className={`w-full p-3 border rounded-xl bg-transparent focus:ring-1 outline-none transition ${
                  errors.businessProblem
                    ? "border-danger focus:border-danger focus:ring-danger"
                    : "border-default-300 focus:border-primary focus:ring-primary"
                }`}
                id="businessProblem"
                placeholder={t(
                  "diagnosisForm.fields.businessProblem.placeholder",
                )}
                rows={4}
              />
            )}
          />
          {errors.businessProblem && (
            <p className="text-danger text-xs mt-1">
              {errors.businessProblem.message ||
                t("diagnosisForm.fields.businessProblem.error")}
            </p>
          )}
        </div>

        <div>
          <label
            className={`block text-sm font-medium mb-2 transition-colors ${
              errors.mustHaveFeatures ? "text-danger" : "text-default-700"
            }`}
            htmlFor="mustHaveFeatures"
          >
            {t("diagnosisForm.fields.mustHaveFeatures.label")}{" "}
            <span className="text-danger">*</span>
          </label>
          <Controller
            control={control}
            name="mustHaveFeatures"
            render={({ field: { ref, ...field } }) => (
              <textarea
                {...field}
                ref={ref}
                className={`w-full p-3 border rounded-xl bg-transparent outline-none transition-all ${
                  errors.mustHaveFeatures
                    ? "border-danger focus:border-danger focus:ring-1 focus:ring-danger"
                    : "border-default-300 focus:border-primary focus:ring-1 focus:ring-primary"
                }`}
                id="mustHaveFeatures"
                placeholder={t(
                  "diagnosisForm.fields.mustHaveFeatures.placeholder",
                )}
                rows={4}
              />
            )}
            rules={{
              required: t("diagnosisForm.fields.mustHaveFeatures.error"),
            }}
          />
          {errors.mustHaveFeatures && (
            <p className="text-danger text-xs mt-1 animate-appearance-in">
              {errors.mustHaveFeatures.message ||
                t("diagnosisForm.fields.mustHaveFeatures.error")}
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
                  errors.budget && t("diagnosisForm.fields.budget.error")
                }
                label={t("diagnosisForm.fields.budget.label")}
                placeholder={t("diagnosisForm.fields.budget.placeholder")}
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
                errorMessage={
                  errors.timeline && t("diagnosisForm.fields.timeline.error")
                }
                label={t("diagnosisForm.fields.timeline.label")}
                placeholder={t("diagnosisForm.fields.timeline.placeholder")}
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

        <Controller
          control={control}
          name="howMet"
          render={({ field }) => (
            <Select
              isRequired
              errorMessage={
                errors.howMet && t("diagnosisForm.fields.howMet.error")
              }
              label={t("diagnosisForm.fields.howMet.label")}
              placeholder={t("diagnosisForm.fields.howMet.placeholder")}
              selectedKeys={field.value ? [field.value] : []}
              variant="bordered"
              onSelectionChange={(keys: any) =>
                field.onChange(Array.from(keys)[0] || "")
              }
            >
              {howMetOptions.map((opt) => (
                <SelectItem key={opt.value}>{opt.label}</SelectItem>
              ))}
            </Select>
          )}
          rules={{ required: true }}
        />

        <div className="flex justify-center pt-4">
          <Button
            className="min-w-48 bg-[#6371A2] text-white"
            endContent={!isSubmitting && <Send className="w-4 h-4" />}
            isLoading={isSubmitting}
            size="lg"
            type="submit"
          >
            {isSubmitting
              ? t("diagnosisForm.button.submitting")
              : isSuccess
                ? t("diagnosisForm.button.success")
                : t("diagnosisForm.button.submit")}
          </Button>
        </div>

        {isSuccess && (
          <p className="text-success text-center text-sm">
            {t("diagnosisForm.successMessage")}
          </p>
        )}
        {submitError && (
          <p className="text-danger text-center text-sm">{submitError}</p>
        )}
      </form>

      <p className="text-default-400 text-sm mt-8 text-center">
        {t("diagnosisForm.footerNote")}
      </p>
    </div>
  );
}
