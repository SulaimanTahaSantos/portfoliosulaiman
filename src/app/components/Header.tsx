"use client";
import Image, { StaticImageData } from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import type { RefObject } from "react";
import { usePathname } from "next/navigation";
interface HeaderProps {
  divRef: RefObject<HTMLDivElement | null>;
  imagenPerfil: StaticImageData;
  cambioColor: boolean;
}
import { BrowserView, MobileView } from "react-device-detect";
import { useState } from "react";

export default function Header({
  divRef,
  imagenPerfil,
  cambioColor,
}: HeaderProps) {
const pathname = usePathname();
const [open, setOpen] = useState(false);


  return (
    <>
      <BrowserView>
        <div ref={divRef} className="flex min-h-screen">
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
                Soy un desarrollador de 23 años con pasión por aprender,
                trabajar y crecer profesionalmente. Me destaco por mi capacidad
                de trabajo en equipo, habilidades sociales y organización.
                Cuando me enfrento a algo nuevo, busco la manera de aprenderlo
                para mejorar constantemente. Me apasiona tanto el frontend como
                el backend.
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
                    Mi experiencia incluye desarrollo con
                    Symfony y React (Tailwind y MaterialUI), y trabajo freelance
                    con PHP y MySQL.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:block relative w-2/5 bg-[#C5FF4A]">
            <div className="fixed top-8 right-40" style={{ zIndex: 50 }}>
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors duration-300 ${
                  cambioColor ? "text-[#CCEF38]" : "text-[#4834C9]"
                }`}
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <X className="h-8 w-8" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </Button>

              {open && (
                <div className="absolute top-12 right-0 w-64 bg-white rounded-none p-6 border-none shadow-lg">
                  <Link href="/" passHref>
                    <div
                      className={`text-lg font-medium py-2 cursor-pointer ${
                        pathname === "/" ? "text-[#CCEF38]" : "text-[#4834C9]"
                      }`}
                    >
                      Inicio
                    </div>
                  </Link>

                  <Link href="/proyectos" passHref>
                    <div
                      className={`text-lg font-medium py-2 cursor-pointer ${
                        pathname === "/proyectos"
                          ? "text-[#CCEF38]"
                          : "text-[#4834C9]"
                      }`}
                    >
                      Mis proyectos
                    </div>
                  </Link>
                  <Link href="/cv" passHref>
                    <div
                      className={`text-lg font-medium py-2 cursor-pointer ${
                        pathname === "/cv" ? "text-[#CCEF38]" : "text-[#4834C9]"
                      }`}
                    >
                      Mi CV
                    </div>
                  </Link>

                  <div className="flex gap-4 mt-6">
                    <Link href="https://github.com/SulaimanTahaSantos?tab=repositories">
                      <p className="text-[#4834C9] hover:text-[#4834C9]/80 p-0">
                        GH
                      </p>
                    </Link>
                    <Link href="https://www.linkedin.com/in/suleiman-el-taha-santos-6b0054254/">
                      <p className="text-[#4834C9] hover:text-[#4834C9]/80 p-0">
                        LN
                      </p>
                    </Link>
                  </div>
                </div>
              )}
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
      </BrowserView>
      <MobileView>
        <div ref={divRef} className="flex flex-col min-h-screen">
          <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-[#4834C9]">
            <h1 className="text-xl font-bold text-[#C5FF4A]">
              Sulaiman El Taha Santos
            </h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#C5FF4A]">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-4 bg-white rounded-none p-4 border-none shadow-lg">
                <div className="flex justify-end mb-2">
                  <X className="h-4 w-4 text-[#4834C9] cursor-pointer" />
                </div>
                <Link href="/" passHref>
                  <DropdownMenuItem
                    className={`text-base font-medium py-2 hover:bg-transparent focus:bg-transparent ${
                      pathname === "/" ? "text-[#CCEF38]" : "text-[#4834C9]"
                    }`}
                  >
                    Inicio
                  </DropdownMenuItem>
                </Link>
                <Link href="/proyectos" passHref>
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
                <Link href="/cv" passHref>
                  <DropdownMenuItem
                    className={`text-base font-medium py-2 hover:bg-transparent focus:bg-transparent ${
                      pathname === "/cv" ? "text-[#CCEF38]" : "text-[#4834C9]"
                    }`}
                  >
                    Mi CV
                  </DropdownMenuItem>
                </Link>
                <div className="flex gap-4 mt-4">
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
          </header>

          <div className="bg-[#4834C9] text-[#C5FF4A] p-6 pt-20 flex flex-col">
            <div className="mt-8">
              <h2 className="text-4xl font-bold leading-tight">
                FullStack
                <br />
                Developer.
              </h2>

              <p className="mt-6 text-white text-base max-w-full">
                Soy un desarrollador de 23 años con pasión por aprender,
                trabajar y crecer profesionalmente. Me destaco por mi capacidad
                de trabajo en equipo, habilidades sociales y organización.
                Cuando me enfrento a algo nuevo, busco la manera de aprenderlo
                para mejorar constantemente. Me apasiona tanto el frontend como
                el backend.
              </p>
            </div>
          </div>

          <div className="relative bg-[#C5FF4A] p-6 flex justify-center items-center min-h-[300px]">
            <div className="relative w-64 h-72">
              <div className="absolute -top-12 -right-12 w-24 h-24 grid grid-cols-8 gap-1">
                {Array(64)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-[#4834C9] opacity-50"
                    ></div>
                  ))}
              </div>

              <div className="absolute -bottom-12 -right-12 w-24 h-24 grid grid-cols-8 gap-1">
                {Array(64)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-[#4834C9] opacity-50"
                    ></div>
                  ))}
              </div>

              <div className="absolute -top-6 -right-16">
                <svg
                  width="30"
                  height="30"
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

              <div className="absolute -bottom-6 -left-16">
                <svg
                  width="30"
                  height="30"
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

              <div className="relative w-64 h-72 bg-gray-300 shadow-lg">
                <Image
                  src={imagenPerfil || "/placeholder.svg"}
                  alt="Sulaiman El Taha Santos"
                  width={256}
                  height={288}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 w-64 h-72 border-2 border-[#4834C9]"></div>
            </div>

            <div className="absolute right-4 bottom-1/4 flex flex-col gap-2">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#4834C9]"
                  ></div>
                ))}
            </div>

            <div className="absolute bottom-4 right-4 w-3 h-3 border-2 border-[#4834C9]"></div>
          </div>

          <div className="bg-[#4834C9] text-[#C5FF4A] p-6 flex flex-col">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Mis tecnologías:</h3>
                <p className="text-white text-sm max-w-full">
                  React, HTML, CSS, JavaScript, PHP, Java, TypeScript, Next.js,
                  Node.js, MySQL, PostgreSQL, XML, C++, Unreal Engine.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Mi experiencia:</h3>
                <p className="text-white text-sm max-w-full">
                  Mi experiencia incluye desarrollo de sistemas
                  medioambientales, colaboración en un proyecto de RRHH con
                  Symfony y React (Tailwind y MaterialUI), y trabajo freelance
                  con PHP y MySQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MobileView>
    </>
  );
}
