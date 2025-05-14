import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import type { RefObject } from "react";
import { BrowserView, MobileView } from "react-device-detect";

interface ProjectsSectionProps {
  divRef: RefObject<HTMLDivElement | null>;
}

export default function ProjectsSection({ divRef }: ProjectsSectionProps) {
  return (
    <>
      <BrowserView>
        <div ref={divRef} className="min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="grid md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                <div className="space-y-6 md:border-r border-gray-100 pr-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#4831D4]">
                    Proyectos
                  </h1>
                  <p className="text-[#3D155F] text-lg text-justify ">
                    He desarrollado diversos proyectos personales y
                    profesionales, incluyendo: El Uno (juego de cartas), Tetris,
                    PearOS (sistema CRUD), un sistema de gestión de incidencias,
                    y SMNET, una plataforma empresarial.
                  </p>
                  <Button
                    variant="outline"
                    className="group relative border-[#4831D4] text-[#4831D4] rounded-none h-[56px] w-[250px] overflow-hidden transition-colors duration-300 ease-in-out"
                    asChild
                    aria-label="Ver mis proyectos"
                    title="Ver mis proyectos"
                  >
                    <Link href="/proyectos" className="flex items-center gap-4">
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
                    Puedes consultar mi currículum en formato PDF para conocer
                    en detalle mi trayectoria profesional y competencias
                    técnicas. Estoy disponible para nuevas oportunidades y
                    colaboraciones.
                  </p>
                  <Button
                    variant="outline"
                    className="group relative border-[#4831D4] text-[#4831D4] rounded-none h-[56px] w-[250px] overflow-hidden transition-colors duration-300 ease-in-out"
                    asChild
                    aria-label="Ver mi CV"
                    title="Ver mi CV"
                  >
                    <Link href="/cv" className="flex items-center gap-4">
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
      </BrowserView>
      <MobileView>
        <div ref={divRef} className="min-h-screen flex flex-col py-16">
          <div className="flex-1 flex flex-col justify-center">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6 pb-12 border-b md:border-b-0 md:border-r border-gray-200 md:pr-6">
                  <h1 className="text-4xl font-bold text-[#4831D4] text-center">
                    Proyectos
                  </h1>
                  <p className="text-[#3D155F] text-base leading-relaxed">
                    He desarrollado diversos proyectos personales y
                    profesionales, incluyendo: El Uno (juego de cartas), Tetris,
                    PearOS (sistema CRUD), un sistema de gestión de incidencias,
                    y SMNET, una plataforma empresarial.
                  </p>
                  <div className="flex justify-center pt-4">
                    <Link
                      href="/proyectos"
                      className="inline-flex items-center justify-center gap-2 border border-[#4831D4] text-[#4831D4] py-3 px-6 uppercase text-sm tracking-wider font-medium"
                      aria-label="Ver mis proyectos"
                      title="Ver mis proyectos"
                    >
                      Ver mis proyectos
                      <MoveRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <div className="space-y-6 pt-6 md:pt-0 md:pl-6">
                  <h1 className="text-4xl font-bold text-[#4831D4] text-center">
                    Mi CV
                  </h1>
                  <p className="text-[#3D155F] text-base leading-relaxed">
                    Puedes consultar mi currículum en formato PDF para conocer
                    en detalle mi trayectoria profesional y competencias
                    técnicas. Estoy disponible para nuevas oportunidades y
                    colaboraciones.
                  </p>
                  <div className="flex justify-center pt-4">
                    <Link
                      href="/cv"
                      className="inline-flex items-center justify-center gap-2 border border-[#4831D4] text-[#4831D4] py-3 px-6 uppercase text-sm tracking-wider font-medium"
                      aria-label="Ver mi CV"
                      title="Ver mi CV"
                    >
                      Ver mi CV
                      <MoveRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MobileView>
    </>
  );
}
