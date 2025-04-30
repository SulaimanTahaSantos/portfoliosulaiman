"use client";
import Image from "next/image";
import type React from "react";

import { Menu, MoveRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import DotPattern from "@/app/components/DotPattern";
import StairPattern from "@/app/components/StairPattern";
import imagenPerfil from "@/app/images/IMG_6585.jpeg";
import { useEffect, useState, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [cambioColor, setCambioColor] = useState(false);
  const tercerDivRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Envio:", formData);
    // Aqui pondremos nustro backend o usando la api de emailjs ya veremos que hacemos.
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div ref={div1Ref} className="flex min-h-screen">
        <div className="relative w-full lg:w-3/5 bg-[#4834C9] text-[#C5FF4A] p-8 md:p-16 flex flex-col">
          <div className="mb-16">
            <h1 className="text-3xl font-bold">Sulaiman El Taha Santos</h1>
          </div>

          <div className="mt-16 md:mt-24">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              FullStack
              <br />
              Developer.
            </h2>

            <p className="mt-8 text-white text-lg md:text-xl max-w-md">
              Soy un desarrollador de 23 años con pasión por aprender, trabajar
              y crecer profesionalmente. Me destaco por mi capacidad de trabajo
              en equipo, habilidades sociales y organización. Cuando me enfrento
              a algo nuevo, busco la manera de aprenderlo para mejorar
              constantemente. Me apasiona tanto el frontend como el backend.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-white text-sm md:text-base max-w-xs">
                  Mis tecnologías: React, HTML, CSS, JavaScript, PHP, Java,
                  TypeScript, Next.js, Node.js, MySQL, PostgreSQL, XML, C++,
                  Unreal Engine.
                </p>
              </div>
              <div>
                <p className="text-white text-sm md:text-base max-w-xs">
                  Mi experiencia incluye desarrollo de sistemas
                  medioambientales, colaboración en un proyecto de RRHH con
                  Symfony y React (Tailwind y MaterialUI), y trabajo freelance
                  con PHP y MySQL.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-32 h-32 border border-[#C5FF4A] rounded-full opacity-20 -ml-16 -mb-16"></div>
        </div>

        <div className="hidden lg:block relative w-2/5 bg-[#C5FF4A]">
          <div className="fixed top-8 right-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition-colors duration-300 ${
                    cambioColor ? "text-[#CCEF38]" : "text-[#4834C9]"
                  }`}
                >
                  <Menu className="h-8 w-8" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 mr-4 bg-white rounded-none p-6 border-none shadow-lg">
                <div className="flex justify-end mb-4">
                  <X className="h-5 w-5 text-[#4834C9] cursor-pointer" />
                </div>
                <Link href="/" passHref>
                  <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
                    Inicio
                  </DropdownMenuItem>
                </Link>

                <Link href="/proyectos" passHref>
                  <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
                    Mis proyectos
                  </DropdownMenuItem>
                </Link>
                <Link href="/cv" passHref>
                  <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
                    Mi CV
                  </DropdownMenuItem>
                </Link>

                <div className="flex gap-4 mt-6">
                  <Link href="https://github.com/SulaimanTahaSantos?tab=repositories">
                    <p className="text-[#4834C9] hover:bg-transparent hover:text-[#4834C9]/80 p-0">
                      GH
                    </p>
                  </Link>
                  <Link href="https://www.linkedin.com/in/suleiman-el-taha-santos-6b0054254/">
                    <p className="text-[#4834C9] hover:bg-transparent hover:text-[#4834C9]/80 p-0">
                      LN
                    </p>
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -top-16 -right-16 w-32 h-32 grid grid-cols-10 gap-1">
              {Array(100)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full bg-[#4834C9] opacity-50"
                  ></div>
                ))}
            </div>

            <div className="absolute -bottom-16 -right-16 w-32 h-32 grid grid-cols-10 gap-1">
              {Array(100)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full bg-[#4834C9] opacity-50"
                  ></div>
                ))}
            </div>

            <div className="absolute -top-8 -right-24">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 40V30H10V20H20V10H30V0H40"
                  stroke="#4834C9"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="absolute -bottom-8 -left-24">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0V10H10V20H20V30H30V40H40"
                  stroke="#4834C9"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="relative w-72 h-80 bg-gray-300 shadow-lg">
              <Image
                src={imagenPerfil || "/placeholder.svg"}
                alt="Sulaiman El Taha Santos"
                width={288}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-72 h-80 border-2 border-[#4834C9]"></div>
          </div>

          <div className="absolute right-8 bottom-1/4 flex flex-col gap-2">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#4834C9]"
                ></div>
              ))}
          </div>

          <div className="absolute bottom-8 right-8 w-4 h-4 border-2 border-[#4834C9]"></div>
        </div>
      </div>
      <div ref={div2Ref} className="min-h-screen bg-white">
        <section className="relative py-32 px-4 container mx-auto">
          <div className="max-w-2xl ml-12 md:ml-24">
            <h2 className="text-6xl md:text-7xl font-bold text-[#4834C9] mb-6">
              Diseño
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              En el diseño de aplicaciones con JavaScript y PHP, me enfoco en
              crear experiencias de usuario atractivas y funcionales. Desarrollo
              interfaces intuitivas que mejoran la usabilidad y satisfacción del
              usuario. Siempre busco la simplicidad y elegancia en cada
              proyecto.
            </p>
          </div>

          <div className="absolute right-0 top-24">
            <DotPattern />
          </div>
        </section>

        <section className="relative py-32 px-4 container mx-auto">
          <div className="max-w-2xl ml-auto mr-12 md:mr-24">
            <h2 className="text-6xl md:text-7xl font-bold text-[#4834C9] mb-6">
              Desarrollo
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Como desarrollador frontend con React/Next.js y TypeScript, creo
              aplicaciones web rápidas y eficientes. Utilizo las últimas
              tecnologías y mejores prácticas para garantizar un rendimiento
              óptimo y una experiencia fluida. Me especializo en integración con
              APIs RESTful.
            </p>
          </div>

          <div className="absolute left-1/3 -bottom-24">
            <StairPattern />
          </div>

          <div className="absolute left-1/4 top-12">
            <DotPattern />
          </div>
        </section>
      </div>
      <div ref={tercerDivRef} className="min-h-screen bg-[#4834c4] text-white">
        <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-8">
            <h1 className="text-[#c1ff72] text-5xl md:text-6xl font-bold leading-tight">
              Experiencia/Trayectoria
            </h1>

            <div className="space-y-6">
              <p className="text-lg">
                Mi carrera informática comenzó como Técnico de Sistemas en
                Centre FP Llefià, donde administraba redes Windows/Linux,
                automatizaba copias de seguridad y documentaba procesos
                críticos.
              </p>

              <p className="text-lg">
                He desarrollado soluciones digitales para diversos sectores,
                desde optimización de sistemas internos hasta aplicaciones web
                completas, siempre priorizando rendimiento, código limpio y
                accesibilidad.
              </p>

              <p className="text-lg">
                Actualmente soy Full‑stack Developer en prácticas en SM Sistemas
                Medioambientales, donde desarrollo y mantengo una plataforma
                React + Symfony: implementé Tailwind CSS, rediseñé los flujos de
                autenticación y optimicé consultas para mejorar el rendimiento
                de SMNET.
              </p>

              <p className="text-lg">
                Anteriormente colaboré como Desarrollador Back‑end freelance en
                Grupo Guaraní, mejorando un sistema de facturación en PHP/MySQL
                y generando documentos PDF bajo metodología Agile.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={imagenPerfil || "/placeholder.svg"}
                width={400}
                height={400}
                alt="Mi foto"
                className="transform translate-x-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={div4Ref} className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div className="space-y-6 md:border-r border-gray-100 pr-8">
                <h1 className="text-4xl md:text-5xl font-bold text-[#4831D4]">
                  Proyectos
                </h1>
                <p className="text-[#3D155F] text-lg text-justify ">
                  He desarrollado diversos proyectos personales y profesionales,
                  incluyendo: El Uno (juego de cartas), Tetris, PearOS (sistema
                  CRUD), un sistema de gestión de incidencias, y SMNET, una
                  plataforma empresarial.
                </p>
                <Button
                  variant="outline"
                  className="group relative border-[#4831D4] text-[#4831D4] rounded-none h-[56px] w-[250px] overflow-hidden transition-colors duration-300 ease-in-out"
                  asChild
                >
                  <Link href="#" className="flex items-center gap-4">
                    <span className="absolute inset-0 w-0 bg-[#4831D4] transition-all duration-500 ease-in-out group-hover:w-full" />
                    <span className="uppercase text-sm tracking-wider font-medium text-[#4831D4] group-hover:text-white relative z-10 transition-colors duration-300">
                      Ver mis proyectos
                    </span>
                    <MoveRight className="h-4 w-4 text-[#4831D4] group-hover:text-white relative z-10 transition-colors duration-300" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-6 pl-0 md:pl-8">
                <h1 className="text-4xl md:text-5xl font-bold text-[#4831D4]">
                  Mi CV
                </h1>
                <p className="text-[#3D155F] text-lg text-justify">
                  Puedes consultar mi currículum en formato PDF para conocer en
                  detalle mi trayectoria profesional y competencias técnicas.
                  Estoy disponible para nuevas oportunidades y colaboraciones.
                </p>
                <Button
                  variant="outline"
                  className="group relative border-[#4831D4] text-[#4831D4] rounded-none h-[56px] w-[250px] overflow-hidden transition-colors duration-300 ease-in-out"
                  asChild
                >
                  <Link href="#" className="flex items-center gap-4">
                    <span className="absolute inset-0 w-0 bg-[#4831D4] transition-all duration-500 ease-in-out group-hover:w-full" />
                    <span className="uppercase text-sm tracking-wider font-medium text-[#4831D4] group-hover:text-white relative z-10 transition-colors duration-300">
                      Ver mi CV
                    </span>
                    <MoveRight className="h-4 w-4 text-[#4831D4] group-hover:text-white relative z-10 transition-colors duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={div5Ref}
        className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
      >
        <div className="max-w-xl w-full mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">
              Mandame un mensaje !
            </h1>
            <p className="text-gray-600">
              Tienes alguna pregunta o propuesta, o simplemente quieres saludar?
              adelante
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="flex-1 space-y-2">
                  <label htmlFor="name" className="text-gray-500 text-sm">
                    Tu nombre
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-purple-600"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <label htmlFor="email" className="text-gray-500 text-sm">
                    Tu Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-purple-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-500 text-sm">
                  Tu mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px] border-0 border-b border-gray-300 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-purple-600 resize-none"
                />
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                type="submit"
                className="group relative border-[#4831D4] text-[#4831D4] rounded-none h-[56px] w-[250px] overflow-hidden transition-colors duration-300 ease-in-out"
              >
                <span className="absolute inset-0 w-0 bg-[#4831D4] transition-all duration-500 ease-in-out group-hover:w-full" />
                <span className="uppercase text-sm tracking-wider font-medium text-[#4831D4] group-hover:text-white relative z-10 transition-colors duration-300">
                  Envia!
                </span>
                <MoveRight className="h-4 w-4 text-[#4831D4] group-hover:text-white relative z-10 transition-colors duration-300" />
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div
        ref={div6Ref}
        className="min-h-screen flex flex-col justify-between bg-[#3b1a68] text-white  p-8 md:p-16 lg:p-24"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <div>
              <h2 className="text-sm uppercase tracking-wider mb-6">
                Saludame
              </h2>
              <div className="space-y-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=sulat3821@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#b9ff64] hover:text-[#d2ff9e] transition-colors"
                >
                  Sulaiman.dev
                </a>
              </div>
            </div>
            <div>
              <nav className="space-y-4">
                <Link
                  href="#"
                  className="block text-[#b9ff64] hover:text-[#d2ff9e] transition-colors"
                >
                  Mis proyectos
                </Link>
                <Link
                  href="#"
                  className="block text-[#b9ff64] hover:text-[#d2ff9e] transition-colors"
                >
                  Mi CV
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <footer className="max-w-6xl mx-auto w-full">
          <div className="border-t border-[#5a3a87] pt-6 w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="text-[#b9ff64]">
                © Sulaiman El Taha Santos {new Date().getFullYear()}
              </div>
              <div className="flex gap-6">
                <Link
                  href="https://github.com/SulaimanTahaSantos?tab=repositories"
                  className="text-[#b9ff64] hover:text-[#d2ff9e] transition-colors"
                  aria-label="GitHub"
                >
                  GH
                </Link>
                <Link
                  href="https://www.linkedin.com/in/suleiman-el-taha-santos-6b0054254/"
                  className="text-[#b9ff64] hover:text-[#d2ff9e] transition-colors"
                  aria-label="LinkedIn"
                >
                  LN
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
