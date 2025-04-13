"use client";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Swal from "sweetalert2";

interface FormData {
  email: string;
  numero: string;
  servicio: string;
  nombre: string;
  comentario?: string;
  presupuesto?: string;
}

const UseFormEmail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const closeModal = () => setIsOpen(false);

  const onSubmit = async (data: FormData) => {
    setFormStatus("loading"); // Set loading status while sending
    try {
      // Send the form data with EmailJS
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILSJS_SERVICE_ID || "", // Ensure the service ID is defined
        process.env.NEXT_PUBLIC_EMAILSJS_TEMPLATE_ID || "", // Ensure the template ID is defined
        {
          nombre: data.nombre,
          email: data.email,
          numero: data.numero,
          servicio: data.servicio,
          presupuesto: data.presupuesto,
          comentario: data.comentario,
        },
        process.env.NEXT_PUBLIC_EMAILSJS_PUBLIC_KEY || "", // Ensure the public key is defined
      );

      // Display success message using SweetAlert2
      Swal.fire({
        title: "¡Formulario enviado!",
        text: "Tu solicitud ha sido enviada correctamente. Nos pondremos en contacto contigo pronto.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });

      console.log("Formulario enviado con éxito", response.text);
      setFormStatus("success"); // Update form status to success

      reset(); // Reset the form after submission
      closeModal(); // Close the modal
    } catch (error: any) {
      console.error("Error al enviar el formulario:", error);

      // Display error message using SweetAlert2
      Swal.fire({
        title: "Error",
        text: `No se pudo enviar el formulario. Por favor, inténtalo nuevamente. ${error.message}`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });

      setFormStatus("error"); // Update form status to error
    }
  };

  return {
    onSubmit,
    setIsOpen,
    isOpen,
    handleSubmit,
    register,
    closeModal,
    errors,
    formStatus,
  };
};

export default UseFormEmail;
