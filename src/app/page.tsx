"use client";
import Image from "next/image";
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
import { useEffect, useState } from "react";



export default function Home() {
  const [cambioColor, setCambioColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight;

      const triggerPoint = totalHeight - windowHeight - 200;

      if (scrollY >= triggerPoint) {
        setCambioColor(true);
      } else {
        setCambioColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex min-h-screen">
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
              Soy un chico de 23 años con ganas de aprender, trabajar y mejorar
              como programador. Pero no solo eso, también soy capaz de trabajar
              en equipo, soy social y organizado en mi trabajo. Cuando no sé
              algo, busco la manera de aprenderlo para así mejorar. Además, me
              gusta mucho tanto el frontend como el backend.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-white text-sm md:text-base max-w-xs">
                  Mis habilidades son: React, HTML, CSS, JS, PHP, Java,
                  TypeScript, Next.js, Node.js, MySQL, PostgreSQL, XML, C++,
                  Unreal Engine.
                </p>
              </div>
              <div>
                <p className="text-white text-sm md:text-base max-w-xs">
                  Mi experiencia como desarrollador web ha sido en sistemas
                  medioambientales, cooperando en un proyecto de RRHH usando
                  Symfony y React con Tailwind y MaterialUI. También he tenido
                  experiencia como freelance en un proyecto con PHP y MySQL.
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
                <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
                  Mis proyectos
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
                  Mi CV
                </DropdownMenuItem>

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
                src={imagenPerfil}
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
      <div className="lg:hidden absolute top-8 right-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-[#C5FF4A]">
              <Menu className="h-8 w-8" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 mr-4 bg-white rounded-none p-6 border-none shadow-lg">
            <div className="flex justify-end mb-4">
              <X className="h-5 w-5 text-[#4834C9] cursor-pointer" />
            </div>
            <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
              Mis proyectos
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
              Home
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
              Mi CV
            </DropdownMenuItem>

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
      <div className="min-h-screen bg-white">
        <section className="relative py-32 px-4 container mx-auto">
          <div className="max-w-2xl ml-12 md:ml-24">
            <h2 className="text-6xl md:text-7xl font-bold text-[#4834C9] mb-6">
              Diseño
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              En el diseño de aplicaciones JavaScript, y PHP, me gusta crear
              experiencias de usuario atractivas y funcionales. Me enfoco en
              crear interfaces intuitivas y atractivas que mejoren la usabilidad
              y la satisfacción del usuario. Siempre busco la simplicidad y la
              elegancia en cada diseño.
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
              En el desarrollo de aplicaciones con JavaScript/React/Next y
              Typescript como front me encargo de crear aplicaciones web rápidas
              y eficientes. Utilizo las últimas tecnologías y mejores prácticas
              para asegurar un rendimiento óptimo y una experiencia de usuario
              fluida. Me gusta trabajar con APIs RESTful
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
      <div className="min-h-screen bg-[#4834c4] text-white">
        <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-8">
            <h1 className="text-[#c1ff72] text-5xl md:text-6xl font-bold leading-tight">
              Experiencia/Trayectoria
            </h1>

            <div className="space-y-6">
              <p className="text-lg">
                Mi trayectoria informatica comenzó como Técnico de Sistemas en
                Centre FP Llefià, administrando redes Windows/Linux,
                automatizando backups y documentando procesos críticos.
              </p>

              <p className="text-lg">
                He creado soluciones digitales para organizaciones de distintos
                sectores, desde la optimización de sistemas internos hasta
                aplicaciones web completas, siempre con énfasis en rendimiento,
                código limpio y accesibilidad.
              </p>

              <p className="text-lg">
                Actualmente soy Full‑stack Developer en prácticas en SM
                Sistemas Medioambientales, donde desarrollo y mantengo una
                plataforma React + Symfony: migré estilos a Tailwind CSS,
                rediseñé los flujos de autenticación y optimicé consultas para
                mejorar la velocidad de SMNET.
              </p>

              <p className="text-lg">
                Antes colaboré como Desarrollador Back‑end freelance en
                Grupo Guaraní, reforzando un CRUD de facturación en PHP/MySQL y
                generando PDFs bajo método Agile.
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={imagenPerfil}
                width={400}
                height={400}
                alt="Mi foto"
                className="transform translate-x-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="grid md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div className="space-y-6 md:border-r border-gray-100 pr-8">
                <h1 className="text-4xl md:text-5xl font-bold text-purple-600">
                  Proyectos
                </h1>
                <p className="text-gray-700 text-lg">
                  He trabajado en varios proyectos, tanto personales como
                  profesionales. Algunos de ellos son: El Uno, Tetris, PearOS
                  (un CRUD), Gestión de incidencias, y SMNET, un sistema
                  desarrollado para la empresa en la que trabajé.
                </p>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 rounded-none px-6 py-6 h-auto"
                  asChild
                >
                  <Link href="/work" className="flex items-center gap-4">
                    <span className="uppercase text-sm tracking-wider font-medium">
                      Ver mis proyectos
                    </span>
                    <MoveRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-6 pl-0 md:pl-8">
                <h1 className="text-4xl md:text-5xl font-bold text-purple-600">
                  Mi Curriculum
                </h1>
                <p className="text-gray-700 text-lg">
                  Puedes ver mi currículum en formato PDF para conocer
                  más sobre mi trayectoria profesional y habilidades. Estoy
                  abierto a nuevas oportunidades y colaboraciones.
                </p>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700 rounded-none px-6 py-6 h-auto"
                  asChild
                >
                  <Link href="#" className="flex items-center gap-4">
                    <span className="uppercase text-sm tracking-wider font-medium">
                      Ver mi CV
                    </span>
                    <MoveRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
