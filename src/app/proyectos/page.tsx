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

export default function Proyectos() {
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
    {
      name: "Sistema CRUD para PearOSSulaiman",
      url: "https://sulaiman.alwaysdata.net/UF3/projectUF3CRUDPHP/theme/login.php",
      logo: "https://ucarecdn.com/5ff71e4c-1388-4969-835d-1670e49e226d/",
      nameUrl: "CRUD",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-gray-50 py-16 px-8">
        <div className="absolute top-8 right-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#4831D4]">
                <Menu className="h-8 w-8" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex justify-end mb-4">
                <X className="h-5 w-5 text-[#4834C9] cursor-pointer" />
              </div>
              <Link href="#" passHref>
                <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-gray-100">
                  Mis proyectos
                </DropdownMenuItem>
              </Link>
              <Link href="/" passHref>
                <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-gray-100">
                  Inicio
                </DropdownMenuItem>
              </Link>
              <Link href="cv" passHref>
                <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-gray-100">
                  Mi CV
                </DropdownMenuItem>
              </Link>

              <div className="flex gap-4 mt-6">
                <Link href="https://github.com/SulaimanTahaSantos?tab=repositories">
                  <p className="text-[#4834C9] hover:text-[#4834C9]/80">GH</p>
                </Link>
                <Link href="https://www.linkedin.com/in/suleiman-el-taha-santos-6b0054254/">
                  <p className="text-[#4834C9] hover:text-[#4834C9]/80">LN</p>
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Mis proyectos</h1>
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
    </>
  );
}
