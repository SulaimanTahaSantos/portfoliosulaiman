"use client";
import Image from "next/image";
import type React from "react";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Footer from "../components/FooterProyectos";
import { usePathname } from "next/navigation";
import { BrowserView, MobileView } from "react-device-detect";

export default function Proyectos() {
  const pathname = usePathname();
  const projects = [
    {
      name: "Tetris",
      url: "https://proyecto-tetris-sulaiman.vercel.app/",
      logo: "https://ucarecdn.com/2b1f7c45-b555-42c0-b90b-6d5fa00007a0/",
      nameUrl: "Tetris"
    },
    {
      name: "Sistema de Gestión de Incidencias",
      url: "https://gestor-incidencias-sulaiman.vercel.app/",
      logo: "https://ucarecdn.com/7078ffea-7b67-4005-9a4c-e9af6d40c813/",
      nameUrl: "SGI"
    },
    {
      name: "UNO Sulaiman",
      url: "https://sulaiman.alwaysdata.net/UF2/jocUno/formulario.php",
      logo: "https://ucarecdn.com/37dee7ab-5efb-45d4-ba1d-d74368ce21e1/",
      nameUrl: "UNOSL",

    },
  ];

  return (
    <>
      <BrowserView>
        <main className="min-h-screen bg-gray-50 py-16 px-8">
          <div className="absolute top-8 right-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#4831D4]" aria-label="Menu" title="Menu">
                  <Menu className="h-8 w-8"  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex justify-end mb-4">
                  <X className="h-5 w-5 text-[#4834C9] cursor-pointer" />
                </div>
                <Link href="#" passHref aria-label="Mis proyectos" title="Mis proyectos">
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

                <Link href="/cv" passHref aria-label="Mi CV" title="Mi CV">
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
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">
              Mis proyectos
            </h1>
            <p className="text-center text-gray-600 mb-16">
              Mis proyectos más destacados, donde he aplicado mis habilidades y
              conocimientos en desarrollo web y programación.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                  />
                  <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                  <Link
                    href={project.url}
                    className="text-[#6B17E6] hover:underline break-words"
                    aria-label={project.name}
                    title={project.name}
                  >
                    {project.nameUrl}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </main>
        <div className="flex flex-col justify-between min-w-screen mx-0 px-0">
          <Footer />
        </div>
      </BrowserView>
      <MobileView>
        <div className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-[#4834C9]">
            <h1 className="text-xl font-bold text-[#C5FF4A]">
              Sulaiman El Taha Santos
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#C5FF4A]" aria-label="Menu" title="Menu">
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
                <Link href="/proyectos" passHref aria-label="Mis proyectos" title="Mis proyectos">
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
                <Link href="/cv" passHref aria-label="Mi CV" title="Mi CV">
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

          <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
            <div className="container mx-auto">
              <h1 className="text-3xl font-bold text-center mb-6">
                Mis proyectos
              </h1>
              <p className="text-center text-gray-600 mb-10 text-sm">
                Mis proyectos más destacados, donde he aplicado mis habilidades
                y conocimientos en desarrollo web y programación.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg p-5 text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Image
                      src={project.logo || "/placeholder.svg"}
                      alt={project.name}
                      width={80}
                      height={80}
                      className="mx-auto mb-3"
                    />
                    <h2 className="text-lg font-semibold mb-2">
                      {project.name}
                    </h2>
                    <Link
                      href={project.url}
                      className="text-[#6B17E6] hover:underline break-words"
                      aria-label={project.name}
                      title={project.name}
                    >
                      {project.nameUrl}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </main>

          <Footer />
        </div>
      </MobileView>
    </>
  );
}
