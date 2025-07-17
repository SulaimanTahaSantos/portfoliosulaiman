"use client";
import Link from "next/link";
import { Mail, Menu, Phone, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LinkedinDownload } from "../components/LinkedinDownload";
import { usePathname } from "next/navigation";
import { MobileView } from "react-device-detect";

export default function CvMobile() {
  const pathname = usePathname();
  return (
    <>
      <MobileView>
        <div className="flex flex-col min-h-screen bg-slate-50">
          <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-[#4834C9]">
            <h1 className="text-xl font-bold text-[#C5FF4A]">
              Sulaiman El Taha Santos
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#C5FF4A]" aria-label="Menu" title="Menu" >
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-4 bg-white rounded-none p-4 border-none shadow-lg">
                <div className="flex justify-end mb-2">
                  <X className="h-4 w-4 text-[#4834C9] cursor-pointer" />
                </div>
                <Link href="/" passHref aria-label="Inicio" title="Inicio">
                  <DropdownMenuItem
                    className={`text-base font-medium py-2 hover:bg-transparent focus:bg-transparent ${
                      pathname === "/" ? "text-[#CCEF38]" : "text-[#4834C9]"
                    }`}
                  >
                    Inicio
                  </DropdownMenuItem>
                </Link>
                <Link href="/proyectos" passHref aria-label="Proyectos" title="Proyectos">
                  <DropdownMenuItem
                    className={`text-base font-medium py-2 hover:bg-transparent focus:bg-transparent ${
                      pathname === "/proyectos"
                        ? "text-[#CCEF38]"
                        : "text-[#4834C9]"
                    }`}
                  >
                    Mis proyectos
                  </DropdownMenuItem>
                </Link>
                <Link href="/cv" passHref aria-label="CV" title="CV">
                  <DropdownMenuItem
                    className={`text-base font-medium py-2 hover:bg-transparent focus:bg-transparent ${
                      pathname === "/cv" ? "text-[#CCEF38]" : "text-[#4834C9]"
                    }`}
                  >
                    Mi CV
                  </DropdownMenuItem>
                </Link>
                <div className="flex gap-4 mt-4">
                  <Link href="https://github.com/SulaimanTahaSantos?tab=repositories" aria-label="GitHub" title="GitHub">
                    <p className="text-[#4834C9] hover:bg-transparent hover:text-[#4834C9]/80 p-0">
                      GH
                    </p>
                  </Link>
                  <Link href="https://www.linkedin.com/in/suleiman-el-taha-santos-6b0054254/" aria-label="LinkedIn" title="LinkedIn">
                    <p className="text-[#4834C9] hover:bg-transparent hover:text-[#4834C9]/80 p-0">
                      LN
                    </p>
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>

          <div className="pt-16 px-4 pb-8">
            <div className="space-y-4 mt-4">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold text-indigo-600">
                  Suleiman El Taha Santos
                </h1>
                <h2 className="text-lg text-gray-700">
                  Junior Fullstack Developer
                </h2>
              </div>

              <div className="space-y-1 text-sm">
                <p className="text-gray-600">Badalona, España</p>
                <Link
                  href="https://mail.google.com/mail/?view=cm&to=sulat3821@gmail.com"
                  className="text-gray-600 hover:text-indigo-600 flex items-center gap-1"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail className="h-3 w-3" aria-label="email" />
                  sulat3821@gmail.com
                </Link>
                <Link
                  href="tel:+34692866417"
                  className="text-sm text-gray-600 hover:text-indigo-600 flex items-center gap-1"
                  aria-label="Teléfono"
                  title="Teléfono"
                >
                  <Phone className="h-3 w-3" aria-label="teléfono" />
                  692 866 417
                </Link>
                <div className="flex gap-4 mt-2">
                  <LinkedinDownload  />
                </div>
              </div>

              <p className="text-gray-600 border-b border-gray-200 pb-4 text-sm">
                Soy un desarrollador web apasionado por crear experiencias
                digitales excepcionales. Con una sólida formación en desarrollo
                frontend y backend, me esfuerzo por construir aplicaciones web
                rápidas, accesibles y fáciles de usar.
              </p>
            </div>

            <section className="mt-6 space-y-4">
              <h2 className="text-lg font-medium text-indigo-600 border-b border-gray-200 pb-2">
                Experiencia
              </h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div>
                    <h3 className="text-base font-medium text-indigo-600">
                      SM Sistemas medioambientales
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-700">
                        Trainee fullstack developer
                      </p>
                      <span className="text-xs text-gray-500">
                        Junio 2024 - Junio 2025
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    Actualmente estoy trabajando como becario en SM Sistemas
                    medioambientales, donde estoy desarrollando una aplicación
                    web para la gestión de datos medioambientales.
                  </p>
                  <details className="text-xs">
                    <summary className="text-indigo-600 cursor-pointer font-medium">
                      Ver responsabilidades
                    </summary>
                    <ul className="space-y-1 mt-2 pl-3">
                      {[
                        "Desarrollo de componentes reutilizables en React",
                        "Adaptación del diseño para experiencia responsive",
                        "Rediseño de interfaces de Login y Registro",
                        "Implementación de recuperación de contraseña",
                        "Migración de Material UI a Tailwind CSS",
                        "Refactorización de código",
                        "Optimización de consultas en Symfony",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-600 flex items-start gap-1"
                        >
                          <span className="text-indigo-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="text-base font-medium text-indigo-600">
                      Grupo Guarani
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-700">Backend Developer</p>
                      <span className="text-xs text-gray-500">
                        Marzo 2025 - Abril 2025
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    Trabajé como desarrollador backend en Grupo Guarani de
                    manera autonoma, donde desarrollé consultas para realizar un
                    crud de facturacion.
                  </p>
                  <details className="text-xs">
                    <summary className="text-indigo-600 cursor-pointer font-medium">
                      Ver responsabilidades
                    </summary>
                    <ul className="space-y-1 mt-2 pl-3">
                      {[
                        "Mejora de CRUD para sistema de facturación",
                        "Trabajo bajo metodología Agile",
                        "Uso de PHP para lógica backend",
                        "Diseño con Tailwind CSS",
                        "Generación de facturas con librería PDF",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-600 flex items-start gap-1"
                        >
                          <span className="text-indigo-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="text-base font-medium text-indigo-600">
                      Centro FP Llefia
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-700">
                        Técnico de sistemas
                      </p>
                      <span className="text-xs text-gray-500">
                        Mayo 2022 - Febrero 2023
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    Realice practicas en el centro de formacion profesional en
                    el que arregle todo tipo de incidencias relacionas con
                    software y hardware.
                  </p>
                  <details className="text-xs">
                    <summary className="text-indigo-600 cursor-pointer font-medium">
                      Ver responsabilidades
                    </summary>
                    <ul className="space-y-1 mt-2 pl-3">
                      {[
                        "Resolución de problemas de hardware",
                        "Copias de seguridad y gestión de cuotas",
                        "Configuración de permisos en carpetas",
                        "Implementación de directivas",
                        "Instalación de software",
                        "Gestión de redes",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-600 flex items-start gap-1"
                        >
                          <span className="text-indigo-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>

                <div className="space-y-2">
                  <div>
                    <h3 className="text-base font-medium text-indigo-600">
                      Forn Marena
                    </h3>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-700">
                        Prácticas de hostelería
                      </p>
                      <span className="text-xs text-gray-500">
                        Octubre 2019 - Junio 2020
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    Realice practicas en el Forn Marena, donde me encargue de
                    atender a los clientes y servir comida y bebida.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-6 space-y-4">
              <h2 className="text-lg font-medium text-indigo-600 border-b border-gray-200 pb-2">
                Tecnologías
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "TypeScript",
                  "PHP",
                  "Symfony",
                  "HTML",
                  "CSS",
                  "React",
                  "Next.js",
                  "Tailwind",
                  "Node.JS",
                  "MySQL",
                  "PostgreSQL",
                  "Git",
                  "Vercel",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                <details className="w-full mt-2">
                  <summary className="text-indigo-600 cursor-pointer text-xs font-medium">
                    Ver más tecnologías
                  </summary>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Sass",
                      "Java",
                      "Python",
                      "C++",
                      "Vite",
                      "Material UI",
                      "Bootstrap",
                      "Bulma",
                      "Shadcn",
                      "Express.js",
                      "Laravel",
                      "Supabase",
                      "GitHub",
                      "Railway",
                      "Netlify",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </details>
              </div>
            </section>

            <section className="mt-6 space-y-4">
              <h2 className="text-lg font-medium text-indigo-600 border-b border-gray-200 pb-2">
                Formación
              </h2>
              <ul className="space-y-4">
                <li className="text-sm">
                  <div className="flex justify-between">
                    <p className="font-medium">Centro FP Llefia</p>
                    <p className="text-xs text-gray-500">2023 - 2025</p>
                  </div>
                  <p className="text-xs">
                    Técnico superior de desarrollo de aplicaciones web
                  </p>
                </li>
                <li className="text-sm">
                  <div className="flex justify-between">
                    <p className="font-medium">Centro FP Llefia</p>
                    <p className="text-xs text-gray-500">2021 - 2023</p>
                  </div>
                  <p className="text-xs">
                    Técnico de sistemas microinformáticos y redes
                  </p>
                </li>
                <li className="text-sm">
                  <div className="flex justify-between">
                    <p className="font-medium">Maregassa CEE</p>
                    <p className="text-xs text-gray-500">2018 - 2020</p>
                  </div>
                  <p className="text-xs">
                    Técnico auxiliar en establecimientos hoteleros
                  </p>
                </li>
                <li className="text-sm">
                  <div className="flex justify-between">
                    <p className="font-medium">Salesians Badalona</p>
                    <p className="text-xs text-gray-500">2014 - 2018</p>
                  </div>
                  <p className="text-xs">
                    Educación secundaria obligatoria (ESO)
                  </p>
                </li>
              </ul>
            </section>

            <section className="mt-6 space-y-4">
              <h2 className="text-lg font-medium text-indigo-600 border-b border-gray-200 pb-2">
                Certificaciones
              </h2>
              <details>
                <summary className="text-indigo-600 cursor-pointer text-sm font-medium">
                  Ver certificaciones
                </summary>
                <ul className="space-y-2 mt-2">
                  {[
                    {
                      name: "Curso de Introducción al diseño de interfaz de usuarios (UI)",
                      url: "https://openwebinars.net/cert/IYM0",
                    },
                    {
                      name: "Curso Python",
                      url: "https://ucarecdn.com/c8254922-37f0-4b5c-99e8-0f971c4cd684/",
                    },
                    {
                      name: "Curso de JavaScript avanzado",
                      url: "https://openwebinars.net/cert/mYNpD",
                    },
                    {
                      name: "Curso de HTML5 Y CSS3",
                      url: "https://openwebinars.net/cert/wEXpE",
                    },
                    {
                      name: "Curso de JavaScript intermedio",
                      url: "https://openwebinars.net/cert/Mymzr",
                    },
                    {
                      name: "Curso de JavaScript para principantes",
                      url: "https://openwebinars.net/cert/3OPYp",
                    },
                  ].map((cert) => (
                    <li key={cert.name} className="text-xs text-gray-600">
                      <Link
                        href={cert.url}
                        className="hover:text-indigo-600 hover:underline flex items-start gap-1"
                        target="_blank"
                        aria-label="Certificación"
                        title="Certificación"
                      >
                        <span className="text-indigo-600">•</span>
                        {cert.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </section>

            <section className="mt-6 space-y-4">
              <h2 className="text-lg font-medium text-indigo-600 border-b border-gray-200 pb-2">
                Otras habilidades
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Refactorización",
                  "Diseño responsivo",
                  "Trabajo en equipo",
                  "Resolución de problemas",
                  "Iniciativa",
                  "Adaptabilidad",
                  "Comunicación",
                  "Aprendizaje continuo",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </MobileView>
    </>
  );
}
