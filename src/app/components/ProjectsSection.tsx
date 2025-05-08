import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import type { RefObject } from "react";

interface ProjectsSectionProps {
  divRef: RefObject<HTMLDivElement | null>;
}

export default function ProjectsSection({ divRef }: ProjectsSectionProps) {
  return (
    <div ref={divRef} className="min-h-screen flex flex-col">
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
  );
}
