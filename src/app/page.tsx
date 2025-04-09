"use client"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import imagenPerfil from "@/app/images/IMG_6585.jpeg"
import { useRouter } from "next/navigation"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link";

export default function Home() {
  const router = useRouter()
  const handleNavigationGithub = () => {
    router.push("https://github.com/SulaimanTahaSantos?tab=repositories")
  }
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
              Soy un chico de 23 años con ganas de aprender, trabajar y mejorar como programador. Pero no solo eso,
              también soy capaz de trabajar en equipo, soy social y organizado en mi trabajo. Cuando no sé algo, busco
              la manera de aprenderlo para así mejorar. Además, me gusta mucho tanto el frontend como el backend.
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-white text-sm md:text-base max-w-xs">
                  Mis habilidades son: Mis habilidades son: React, HTML, CSS, JS, PHP, Java, TypeScript, Next.js,
                  Node.js, MySQL, PostgreSQL, XML, C++, Unreal Engine.
                </p>
              </div>
              <div>
                <p className="text-white text-sm md:text-base max-w-xs">
                  Mi experiencia como desarrollador web ha sido en sistemas medioambientales, cooperando en un proyecto
                  de RRHH usando Symfony y React con Tailwind y MaterialUI. También he tenido experiencia como freelance
                  en un proyecto con PHP y MySQL.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-32 h-32 border border-[#C5FF4A] rounded-full opacity-20 -ml-16 -mb-16"></div>
        </div>

        <div className="hidden lg:block relative w-2/5 bg-[#C5FF4A]">
          <div className="absolute top-8 right-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#4834C9]">
                  <Menu className="h-8 w-8 fixed" />
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
                  <div key={i} className="w-1 h-1 rounded-full bg-[#4834C9] opacity-50"></div>
                ))}
            </div>

            <div className="absolute -bottom-16 -right-16 w-32 h-32 grid grid-cols-10 gap-1">
              {Array(100)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#4834C9] opacity-50"></div>
                ))}
            </div>

            <div className="absolute -top-8 -right-24">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 40V30H10V20H20V10H30V0H40" stroke="#4834C9" strokeWidth="2" />
              </svg>
            </div>

            <div className="absolute -bottom-8 -left-24">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0V10H10V20H20V30H30V40H40" stroke="#4834C9" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative w-72 h-80 bg-gray-300 shadow-lg">
              <Image
                src={imagenPerfil || "/placeholder.svg"}
                alt="Frontend Developer"
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
                <div key={i} className="w-2 h-2 rounded-full bg-[#4834C9]"></div>
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
              My Work
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
              My Shelf
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
              My Résumé
            </DropdownMenuItem>

            <div className="mt-8 mb-4">
              <p className="text-gray-400 uppercase text-xs tracking-wider">SAY HELLO</p>
            </div>

            <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
              hello@olaolu.dev
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#4834C9] text-lg font-medium py-2 hover:bg-transparent hover:text-[#4834C9]/80 focus:bg-transparent">
              t.me/mrolaolu
            </DropdownMenuItem>

            <div className="flex gap-4 mt-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-[#4834C9] hover:bg-transparent hover:text-[#4834C9]/80 p-0"
              >
                TW
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-[#4834C9] hover:bg-transparent hover:text-[#4834C9]/80 p-0"
              >
                GH
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-[#4834C9] hover:bg-transparent hover:text-[#4834C9]/80 p-0"
              >
                LN
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-[#4834C9] hover:bg-transparent hover:text-[#4834C9]/80 p-0"
              >
                YT
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      
    </main>
  )
}
