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
                  <ul className="space-y-1">
                    {[
                      // Lenguajes
                      "JavaScript",
                      "TypeScript",
                      "PHP",
                      "HTML",
                      "CSS",
                      "Sass",
                      "Java",
                      "Python",
                      "C++",

                      // Frontend Frameworks & Librerías
                      "React",
                      "Next.js",
                      "Vite",
                      "Tailwind CSS",
                      "Material UI",
                      "Bootstrap",
                      "Bulma",
                      "Shadcn",

                      // Backend Frameworks
                      "Node.JS",
                      "Express.js",
                      "Laravel",
                      "Symfony",

                      // Bases de Datos
                      "MySQL",
                      "PostgreSQL",
                      "Supabase",

                      // Control de versiones
                      "Git",
                      "GitHub",

                      // Producción / Deploy
                      "Vercel",
                      "Railway",
                      "Netlify",
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
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-indigo-700">
                    Certificaciones:
                  </h3>
                  <ul className="space-y-1">
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
                          <p className="font-medium">Maregassa CEE</p>
                          <p>
                            Técnico auxiliar en establecimientos hoteleros y
                            restauración
                          </p>
                          <p className="text-gray-500">
                            Septiembre 2018 - Junio 2020
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
                    fueron para las siguientes organizaciones:
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
                        Actualmente estoy trabajando como becario en SM Sistemas
                        medioambientales, donde estoy desarrollando una
                        aplicación web para la gestión de datos
                        medioambientales. Estoy utilizando tecnologías como
                        React, Tailwind/MaterialUI, Symfony y SQL.
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Desarrollo de componentes reutilizables en React, mejorando la escalabilidad y mantenibilidad del código.",
                          "Adaptación del diseño de aplicaciones para garantizar una experiencia responsive en dispositivos móviles y de escritorio.",
                          "Collaborating with UX designers and researchers to inform the direction of products we craft",
                          "Rediseño integral de las interfaces de Login, Registro y Recuperación de Contraseña, mejorando la usabilidad y el atractivo visual",
                          "Implementación de la funcionalidad de recuperación de contraseña mediante EmailJS",
                          "Migración del sistema de estilos de Material UI a Tailwind CSS, obteniendo una interfaz más ligera y moderna.",
                          "Refactorización de código para optimizar su estructura, rendimiento y legibilidad",
                          "Uso eficiente de Git para la gestión de versiones y trabajo colaborativo en equipo",
                          "Identificación y solución de diversos problemas relacionados con la experiencia de usuario",
                          "Optimización de controladores y consultas en Symfony para mejorar el acceso a la web",
                          "Desarrollo de una lógica personalizada para la asignación automática de roles",
                          "Creación del sistema de jornada de distribución especial, permitiendo una distribución equitativa de horas y gestión flexible de vacaciones entre diferentes períodos.",
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
                        Trabajé como desarrollador backend en Grupo Guarani de
                        manera autonoma, donde desarrollé consultas para
                        realizar un crud de facturacion en una base de datos con
                        PHP SQL y Tailwind.
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
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">
                          <span className="text-indigo-600">
                            Centro FP Llefia
                          </span>
                          — Técnico de sistemas
                        </h3>
                        <span className="text-sm text-gray-500">
                          Mayo 2022 - Febrero 2023
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Realice practicas en el centro de formacion profesional
                        en el que arregle todo tipo de incidencias relacionas
                        con software y hardware de los ordenadores del centro.
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Identificación y Resolución de Problemas de Hardware: Resolución de fallos y montaje en procesadores, placas base, pilas (baterías), BIOS, discos duros, SSD y otros componentes. Comprobación y reparación de fallos en las ranuras de memoria.",
                          "Seguridad y cuotas: Realización de copias de seguridad utilizando periféricos para facilitar la transferencia de datos. Asignación de cuotas de espacio a usuarios según prioridades y necesidades.",
                          "Gestión de Permisos: Configuración de permisos en carpetas para evitar la modificación o eliminación de datos por usuarios no autorizados.",
                          "Implementación de Directivas: Creación de directivas para restringir específicas, como cambiar el fondo de pantalla, según roles de acciones del usuario.",
                          "Instalación de Software: Instalación de diversos software, incluyendo XAMPP, Office, Visual Studio, etc.",
                          "Gestión de Redes: Reemplazo de switch para mejorar la conectividad y resolver problemas. Configuración de direcciones IP locales para dispositivos como PLC, facilitando el acceso para usuarios sin permisos de cambio.",
                          "Gestión de Permisos y Archivos en Linux: `chmod`: Cambiar permisos en carpetas y archivos. `ls`: Listar contenido de un directorio. `tail`: Mostrar las últimas líneas de un archivo. `head`: Mostrar las primeras líneas de un archivo. `cp`: Copiar archivos y directorios. `cd`: Cambiar de directorio. `cat`: Muestra el contenido completo de un archivo. `useradd`: Crear nuevos usuarios en el sistema. PowerShell: `gpupdate /force`: Forzar la actualización de directivas del sistema. Utilizado para crear usuarios y asignar privilegios después de la instalación de Active Directory. Documentación: Creación de manuales para la empresa, a incluir temas como instalación, directivas, permisos, cuotas, hardware y software. Además, elaborará manuales sobre cómo ingresar las licencias, el proceso de adquisición, así como la instalación de servidores, incluyendo XAMPP, WinServer y TiaPortal.",
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
                          <span className="text-indigo-600">Forn Marena</span> —
                          Prácticas de servicio de hosteleria
                        </h3>
                        <span className="text-sm text-gray-500">
                          Octubre 2019 - Junio 2020
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Realice practicas en el Forn Marena, donde me encargue
                        de atender a los clientes y servir comida y bebida.
                        Aprendi a trabajar en equipo y a gestionar el tiempo de
                        manera eficiente. Durante mi tiempo allí, desarrollé
                        habilidades de atención al cliente y aprendí a trabajar
                        en un entorno dinámico y de ritmo rápido.
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Recogida de la basura.",
                          "Lavar las herramientas de trabajo y material del local.",
                          "Atención al cliente.",
                          "Ayuda al cocinero.",
                          "Servir cafés y comida.",
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
              </main>
            </div>
          </div>
        </div>
      </BrowserView>
    </>
  );
}
