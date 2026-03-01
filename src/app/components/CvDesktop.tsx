"use client";
import Link from "next/link";
import { Mail, Menu, X, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LinkedinDownload } from "../components/LinkedinDownload";
import { usePathname } from "next/navigation";
import { BrowserView } from "react-device-detect";

export default function CvDesktop() {
  const pathname = usePathname();
  return (
    <>
      <BrowserView>
        <div className="min-h-screen bg-slate-50 py-8 px-4 md:px-8 lg:px-16">
          <div className="absolute top-8 right-20">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#4831D4]" aria-label="Menu" title="Menu">
                  <Menu className="h-8 w-8" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-50 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex justify-end mb-4">
                  <X className="h-5 w-5 text-[#4834C9] cursor-pointer" />
                </div>
                <Link href="/proyectos" passHref>
                  <DropdownMenuItem
                    className={`text-lg font-medium py-2 hover:bg-transparent focus:bg-transparent ${
                      pathname === "/proyectos"
                        ? "text-[#CCEF38]"
                        : "text-[#4834C9]"
                    }`}
                  >
                    Mis proyectos
                  </DropdownMenuItem>
                </Link>

                <Link href="/" passHref aria-label="Inicio" title="Inicio">
                  <DropdownMenuItem
                    className={`text-lg font-medium py-2 hover:bg-transparent focus:bg-transparent ${
                      pathname === "/" ? "text-[#CCEF38]" : "text-[#4834C9]"
                    }`}
                  >
                    Inicio
                  </DropdownMenuItem>
                </Link>

                <Link href="/cv" passHref aria-label="CV" title="CV">
                  <DropdownMenuItem
                    className={`text-lg font-medium py-2 hover:bg-transparent focus:bg-transparent ${
                      pathname === "/cv" ? "text-[#CCEF38]" : "text-[#4834C9]"
                    }`}
                  >
                    Mi CV
                  </DropdownMenuItem>
                </Link>

                <div className="flex gap-4 mt-6">
                  <Link href="https://github.com/SulaimanTahaSantos?tab=repositories" aria-label="GitHub" title="GitHub">
                    <p className="text-[#4834C9] hover:text-[#4834C9]/80">GH</p>
                  </Link>
                  <Link href="https://www.linkedin.com/in/suleiman-el-taha-santos-6b0054254/" aria-label="LinkedIn" title="LinkedIn">
                    <p className="text-[#4834C9] hover:text-[#4834C9]/80">LN</p>
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="absolute top-8 right-40">
            <LinkedinDownload />
          </div>
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
              <aside className="space-y-8">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-indigo-600">
                    <Link href={"/"} aria-label="Inicio" title="Inicio">
                      <span className="text-indigo-600">
                        Sulaimaneltaha.com
                      </span>
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600">Badalona, España</p>
                  <Link
                    href="https://mail.google.com/mail/?view=cm&to=sulat3821@gmail.com"
                    className="text-sm text-gray-600 hover:text-indigo-600 flex items-center gap-1"
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
                  
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-indigo-700">
                    Tecnologias
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-indigo-600 mb-1">
                        Experiencia profesional / freelance:
                      </p>
                      <ul className="space-y-1">
                        {[
                          "JavaScript",
                          "HTML5",
                          "CSS3",
                          "React",
                          "Tailwind CSS",
                          "Material UI",
                          "PHP",
                          "Symfony",
                          "MySQL",
                          "Git",
                          "Agile",
                        ].map((tech) => (
                          <li
                            key={tech}
                            className="text-sm text-gray-600 flex items-center gap-2"
                          >
                            <span className="text-xs">•</span> {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-indigo-600 mb-1">
                        Proyectos propios (publicados o en desarrollo):
                      </p>
                      <ul className="space-y-1">
                        {[
                          "Next.js",
                          "TypeScript",
                          "Prisma",
                          "AWS",
                          "PostgreSQL",
                          "Vercel",
                          "Railway",
                          "Laravel",
                          "ShadCN",
                          "Bootstrap",
                          "Python",
                          "Unreal Engine 5",
                        ].map((tech) => (
                          <li
                            key={tech}
                            className="text-sm text-gray-600 flex items-center gap-2"
                          >
                            <span className="text-xs">•</span> {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-indigo-700">
                    Certificaciones:
                  </h3>
                  <ul className="space-y-1">
                    {[
                      {
                        name: "Mejor Proyecto de Clase con Unreal Engine 5",
                        url: "https://ucarecdn.com/c88ac86c-9833-4993-95a2-97c485d990df/",
                      },
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
                      <li
                        key={cert.name}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <span className="text-xs">•</span>
                        <Link
                          href={cert.url}
                          className="hover:text-indigo-600 hover:underline"
                          target="_blank"
                          aria-label="Certificación"
                          title="Certificación"
                        >
                          {cert.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-indigo-700">
                    Formación:
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="text-xs mt-1">•</span>
                        <div>
                          <p className="font-medium">Centro FP Llefia</p>
                          <p>
                            Técnico superior de desarrollo de aplicaciones web
                          </p>
                          <p className="text-gray-500">
                            Septiembre 2023 - Junio 2025
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="text-xs mt-1">•</span>
                        <div>
                          <p className="font-medium">Centro FP Llefia</p>
                          <p>Técnico de sistemas microinformáticos y redes</p>
                          <p className="text-gray-500">
                            Septiembre 2021 - Junio 2023
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <span className="text-xs mt-1">•</span>
                        <div>
                          <p className="font-medium">Salesians Badalona</p>
                          <p>Educación secundaria obligatoria (ESO)</p>
                          <p className="text-gray-500">
                            Septiembre 2014 - Junio 2018
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-indigo-700">
                    Otros:
                  </h3>
                  <ul className="space-y-1">
                    {[
                      "Refactorización de código",
                      "Diseño responsivo",
                      "Trabajo en equipo",
                      "Resolución autónoma de problemas",
                      "Iniciativa",
                      "Adaptabilidad",
                      "Comunicación",
                      "Aprendizaje continuo",
                    ].map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <span className="text-xs">•</span> {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              <main className="space-y-8">
                <div className="space-y-1">
                  <h1 className="text-5xl font-bold text-indigo-600">
                    Suleiman
                  </h1>
                  <h1 className="text-5xl font-bold text-indigo-600">
                    El Taha Santos
                  </h1>
                  <h2 className="text-xl text-gray-700 mt-2">
                    Junior Fullstack Developer
                  </h2>
                </div>

                <p className="text-gray-600 border-b border-gray-200 pb-6">
                  Soy un desarrollador web apasionado por crear experiencias
                  digitales excepcionales. Con una sólida formación en
                  desarrollo frontend y backend, me esfuerzo por construir
                  aplicaciones web rápidas, accesibles y fáciles de usar.
                  Siempre estoy buscando aprender nuevas tecnologías y mejorar
                  mis habilidades.
                </p>

                <section className="space-y-6">
                  <h2 className="text-lg font-medium text-indigo-600">
                    Experiencia
                  </h2>
                  <p className="text-gray-600">
                    He trabajado en varios proyectos web, algunos de los cuales
                    fueron para las siguientes empresas:
                  </p>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          <span className="text-indigo-600">
                            SM Sistemas medioambientales
                          </span>
                          — Trainee fullstack developer
                        </h3>
                        <span className="text-sm text-gray-500">
                          Junio 2024 - Junio 2025
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Trabajé como desarrollador fullstack en un equipo ágil, utilizando React, Material UI, Tailwind CSS, Symfony, MySQL y Git. Estas fueron algunas de mis principales responsabilidades:
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Desarrollo de componentes escalables y reutilizables en React, migrando estilos de Material UI a Tailwind CSS.",
                          "Rediseño de interfaces clave (Login, Registro, Recuperación), mejorando usabilidad y experiencia móvil.",
                          "Implementación de funcionalidades como recuperación de contraseña vía EmailJS y fetch API personalizado",
                          "Refactorización de código, resolución de problemas de UX y estandarización de peticiones HTTP.",
                          "Optimización del backend en Symfony: controladores, consultas, asignación de roles y lógica de distribución horaria.",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-indigo-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          <span className="text-indigo-600">Grupo Guarani</span>{" "}
                          — Backend Developer
                        </h3>
                        <span className="text-sm text-gray-500">
                          Marzo 2025 - Abril 2025
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Trabajé de forma autónoma como desarrollador backend, colaborando en la implementación de un sistema de facturación para una web empresarial. El proyecto se desarrolló bajo metodología Agile en conjunto con otro desarrollador.
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Participé en la mejora de un CRUD para una página web en la que se implementaba un sistema de facturación.",
                          "El proyecto se llevó a cabo bajo la metodología Agile, colaborando estrechamente con un compañero.",
                          "Utilizamos PHP para la lógica del backend y Tailwind CSS para el diseño de la interfaz, asegurando un diseño limpio y moderno.",
                          "La generación de facturas se realizó con una librería PDF, y las consultas a la base de datos fueron gestionadas con MySQL para asegurar la correcta persistencia y manipulación de la información.",
                          "Este trabajo incluyó la optimización de la interfaz y la integración de funcionalidades adicionales que permitieron a los usuarios gestionar y visualizar sus facturas de forma más eficiente y amigable.",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-indigo-600 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              
                {/* <section className="space-y-6">
                  <h2 className="text-lg font-medium text-indigo-600">
                    Proyectos personales destacados
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-700 mb-2">
                        Tetris
                      </p>
                      <div className="flex gap-4">
                        <a
                          href="https://github.com/SulaimanTahaSantos/ProyectoTetrisSulaiman"
                          className="text-indigo-600 hover:underline text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Repositorio Tetris"
                        >
                          Repositorio
                        </a>
                        <a
                          href="https://proyecto-tetris-sulaiman.vercel.app/"
                          className="text-indigo-600 hover:underline text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Publicación Tetris"
                        >
                          Visualización de la página web 
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-2">
                        Sistemas de gestión de incidencias
                      </p>
                      <div className="flex gap-4">
                        <a
                          href="https://github.com/SulaimanTahaSantos/GestorIncidenciasSulaiman"
                          className="text-indigo-600 hover:underline text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Sistema de gestión de incidencias Repositorio"
                        >
                          Repositorio
                        </a>
                        <a
                          href="https://gestor-incidencias-sulaiman.vercel.app"
                          className="text-indigo-600 hover:underline text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Publicación Proyecto gestión de incidencias"
                        >
                          Visualización de la página web 
                        </a>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-gray-700 mb-2">
                        Uno Game
                      </p>
                      <div className="flex gap-4">
                        <a
                          href="https://github.com/SulaimanTahaSantos/UnoGame"
                          className="text-indigo-600 hover:underline text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Uno Game Repositorio"
                        >
                          Repositorio
                        </a>
                        <a
                          href="https://sulaiman.alwaysdata.net/UF2/jocUno/formulario.php"
                          className="text-indigo-600 hover:underline text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Publicación Uno Game"
                        >
                          Visualización de la página web 
                        </a>
                      </div>
                    </div>
                  </div>
                </section> */}
              </main>
            </div>
          </div>
        </div>
      </BrowserView>
    </>
  );
}
