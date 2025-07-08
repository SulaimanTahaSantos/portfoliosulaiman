"use client";
import { useEffect, useState, useRef } from "react";
import type React from "react";

import emailjs from "@emailjs/browser";
import imagenPerfil from "@/app/images/IMG_6585.jpeg";

import Header from "@/app/components/Header";
import SkillsSection from "@/app/components/SkillsSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ContactSection from "@/app/components/ContactSection";
import FooterSection from "@/app/components/FooterSection";

export default function Home() {
  const [cambioColor, setCambioColor] = useState(false);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const tercerDivRef = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  const [estaDesplazando, setEstaDesplazando] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message:
      "Hola, me encantó tu portafolio y el estilo de tus diseños. Estoy buscando a alguien que me ayude a desarrollar la identidad visual de una marca personal que estoy lanzando. ¿Tienes disponibilidad para una reunión esta semana? ¡Gracias!",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const refsSecciones = [
    div1Ref,
    div2Ref,
    tercerDivRef,
    div4Ref,
    div5Ref,
    div6Ref,
  ];

  const desplazarASeccion = (index: number) => {
    const validIndex = Math.max(0, Math.min(index, refsSecciones.length - 1));

    if (refsSecciones[validIndex].current) {
      setEstaDesplazando(true);
      refsSecciones[validIndex].current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        setEstaDesplazando(false);
      }, 200);
    }
  };

  const obtenerIndiceSeccionActual = () => {
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    for (let i = 0; i < refsSecciones.length; i++) {
      const ref = refsSecciones[i];
      if (!ref.current) continue;

      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top + scrollPosition;
      const elementBottom = elementTop + rect.height;

      if (
        elementTop <= scrollPosition + viewportHeight / 2 &&
        elementBottom >= scrollPosition + viewportHeight / 2
      ) {
        return i;
      }
    }

    let closestSection = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    for (let i = 0; i < refsSecciones.length; i++) {
      const ref = refsSecciones[i];
      if (!ref.current) continue;

      const rect = ref.current.getBoundingClientRect();
      const distance = Math.abs(
        rect.top + rect.height / 2 - viewportHeight / 2
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestSection = i;
      }
    }

    return closestSection;
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (estaDesplazando) return;

      const currentIndex = obtenerIndiceSeccionActual();

      if (e.deltaY > 0 && currentIndex < refsSecciones.length - 1) {
        desplazarASeccion(currentIndex + 1);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        desplazarASeccion(currentIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [estaDesplazando]);

  useEffect(() => {
    const handleScroll = () => {
      if (!tercerDivRef.current || !div6Ref.current) return;

      const rect3 = tercerDivRef.current.getBoundingClientRect();
      const rect6 = div6Ref.current.getBoundingClientRect();

      const isThirdVisible =
        rect3.top <= window.innerHeight / 2 &&
        rect3.bottom >= window.innerHeight / 2;

      const isSixthVisible =
        rect6.top <= window.innerHeight / 2 &&
        rect6.bottom >= window.innerHeight / 2;

      setCambioColor(isThirdVisible || isSixthVisible);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setIsSuccess(false);

    try {
      const result = await emailjs.send(
        "service_ipwvt6s",
        "template_65oc388",
        {
          to_name: "Sulaiman",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          title: `Nuevo mensaje desde el portafolio de  + ${formData.email}`,
        },
        "WWfMPEGNwNuYrM-4e"
      );

      console.log("Email enviado correctamente:", result);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Header
        divRef={div1Ref}
        imagenPerfil={imagenPerfil}
        cambioColor={cambioColor}
      />
      <SkillsSection divRef={div2Ref} />
      <ExperienceSection divRef={tercerDivRef}  />
      <ProjectsSection divRef={div4Ref} />
      <ContactSection
        divRef={div5Ref}
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
      <FooterSection divRef={div6Ref} />
    </main>
  );
}
