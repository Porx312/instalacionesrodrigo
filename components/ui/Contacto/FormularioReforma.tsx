"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import UseFormEmail from "Hooks/UseFormEmail";

export default function FormularioReforma() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    servicio: "",
    nombre: "",
    email: "",
    telefono: "",
  });

  const { onSubmit, handleSubmit, register, formStatus, errors } =
    UseFormEmail();

  const questions = [
    {
      key: "servicio",
      label: "¿Qué tipo de reforma necesitas?",
      type: "text",
      placeholder: "Ej: Cocina, baño, integral...",
    },

    {
      key: "nombre",
      label: "¿Cuál es tu nombre?",
      type: "text",
      placeholder: "Nombre completo",
    },
    {
      key: "email",
      label: "¿Cuál es tu email?",
      type: "email",
      placeholder: "correo@ejemplo.com",
    },
    {
      key: "telefono",
      label: "¿Cuál es tu número de teléfono?",
      type: "tel",
      placeholder: "123456789",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      handleSubmit(handleSubmitx)();
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmitx = () => {
    // Here, we format the data as per the structure the `onSubmit` expects
    const datosFormateados = {
      nombre: formData.nombre,
      email: formData.email,
      numero: formData.telefono,
      servicio: formData.servicio,
    };
    onSubmit(datosFormateados); // Call the onSubmit method from the useFormEmail hook
  };

  const currentQuestion = questions[step];

  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 py-2">
      {/* Progress Bar (optional) */}
      {/* <div className="mb-6">
        <p className="text-sm text-gray-500 text-center">
          Paso {step + 1} de {questions.length}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div> */}

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label
            htmlFor={currentQuestion.key}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {currentQuestion.label}
          </label>
          <input
            type={currentQuestion.type}
            id={currentQuestion.key}
            name={currentQuestion.key}
            value={formData[currentQuestion.key as keyof typeof formData]}
            onChange={handleInputChange}
            placeholder={currentQuestion.placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          {errors[currentQuestion.key] && (
            <p className="text-red-500 text-xs mt-1">
              {errors[currentQuestion.key]?.message}
            </p>
          )}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={step === 0}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {step === questions.length - 1 ? "Enviar" : "Siguiente"}
          </button>
        </div>
      </form>

      {formStatus === "loading" && (
        <div className="text-center text-gray-500 mt-4">
          <p>Enviando...</p>
        </div>
      )}

      {formStatus === "success" && (
        <div className="text-center text-green-500 mt-4">
          <p>¡Formulario enviado exitosamente!</p>
        </div>
      )}

      {formStatus === "error" && (
        <div className="text-center text-red-500 mt-4">
          <p>Hubo un error al enviar el formulario. Intenta nuevamente.</p>
        </div>
      )}
    </div>
  );
}
