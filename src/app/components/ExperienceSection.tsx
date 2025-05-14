import Image, { StaticImageData } from "next/image";
import type { RefObject } from "react";
import { BrowserView, MobileView } from "react-device-detect";

interface ExperienceSectionProps {
  divRef: RefObject<HTMLDivElement | null>;
  imagenPerfil: StaticImageData;
}

export default function ExperienceSection({
  divRef,
  imagenPerfil,
}: ExperienceSectionProps) {
  return (
    <>
      <BrowserView>
        <div ref={divRef} className="min-h-screen bg-[#4834c4] text-white">
          <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            <div className="space-y-8">
              <h1 className="text-[#c1ff72] text-5xl md:text-6xl font-bold leading-tight">
                Experiencia/Trayectoria
              </h1>

              <div className="space-y-6">
                <p className="text-lg">
                  Mi carrera informática comenzó como Técnico de Sistemas en
                  Centre FP Llefià, donde administraba redes Windows/Linux,
                  automatizaba copias de seguridad y documentaba procesos
                  críticos.
                </p>

                <p className="text-lg">
                  He desarrollado soluciones digitales para diversos sectores,
                  desde optimización de sistemas internos hasta aplicaciones web
                  completas, siempre priorizando rendimiento, código limpio y
                  accesibilidad.
                </p>

                <p className="text-lg">
                  Actualmente soy Full‑stack Developer en prácticas en SM
                  Sistemas Medioambientales, donde desarrollo y mantengo una
                  plataforma React + Symfony: implementé Tailwind CSS, rediseñé
                  los flujos de autenticación y optimicé consultas para mejorar
                  el rendimiento de SMNET.
                </p>

                <p className="text-lg">
                  Anteriormente colaboré como Desarrollador Back‑end freelance
                  en Grupo Guaraní, mejorando un sistema de facturación en
                  PHP/MySQL y generando documentos PDF bajo metodología Agile.
                </p>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={imagenPerfil || "/placeholder.svg"}
                  width={400}
                  height={400}
                  alt="Mi foto"
                  className="transform translate-x-10"
                />
              </div>
            </div>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div
          ref={divRef}
          className="min-h-screen bg-[#4834c4] text-white relative"
        >
          <div className="px-6 py-20 pb-20">
            <h1 className="text-[#c1ff72] text-3xl font-bold leading-tight mb-8">
              Experiencia/Trayectoria
            </h1>

            <div className="flex flex-col space-y-6">
              <p className="text-base">
                Mi carrera informática comenzó como Técnico de Sistemas en
                Centre FP Llefià, donde administraba redes Windows/Linux,
                automatizaba copias de seguridad y documentaba procesos
                críticos.
              </p>

              <p className="text-base">
                He desarrollado soluciones digitales para diversos sectores,
                desde optimización de sistemas internos hasta aplicaciones web
                completas, siempre priorizando rendimiento, código limpio y
                accesibilidad.
              </p>

              <p className="text-base">
                Actualmente soy Full‑stack Developer en prácticas en SM Sistemas
                Medioambientales, donde desarrollo y mantengo una plataforma
                React + Symfony: implementé Tailwind CSS, rediseñé los flujos de
                autenticación y optimicé consultas para mejorar el rendimiento
                de SMNET.
              </p>

              <p className="text-base">
                Anteriormente colaboré como Desarrollador Back‑end freelance en
                Grupo Guaraní, mejorando un sistema de facturación en PHP/MySQL
                y generando documentos PDF bajo metodología Agile.
              </p>
            </div>
          </div>
          <div className="flex justify-center -mt-17">
            <Image
              src={imagenPerfil || "/placeholder.svg"}
              width={200}
              height={200}
              alt="Mi foto"
              className="rounded-sm"
            />
          </div>
        </div>
      </MobileView>
    </>
  );
}
