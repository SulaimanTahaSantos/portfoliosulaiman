import Image, { StaticImageData } from "next/image";
import type { RefObject } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Experience from "./Experience";

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
                  Mi carrera informática comenzó como <strong>Técnico de Sistemas</strong>, donde
                  administraba redes <strong>Windows/Linux</strong>, automatizaba <strong>copias de seguridad</strong> y
                  documentaba <strong>procesos críticos</strong>.
                </p>

                <p className="text-lg">
                  He desarrollado <strong>soluciones digitales</strong> para diversos sectores, desde
                  <strong> optimización de sistemas internos</strong> hasta <strong>aplicaciones web completas</strong>,
                  siempre priorizando <strong>rendimiento</strong>, <strong>código limpio</strong> y <strong>accesibilidad</strong>.
                </p>

                <p className="text-lg">
                  Actualmente soy <strong>Full‑stack Developer en prácticas</strong>, donde desarrollo y mantengo
                  una plataforma <strong>React</strong> + <strong>Symfony</strong>: implementé <strong>Tailwind CSS</strong>,
                  rediseñé los <strong>flujos de autenticación</strong> y optimicé <strong>consultas</strong> para
                  mejorar el <strong>rendimiento</strong>.
                </p>

                <p className="text-lg">
                  Anteriormente colaboré como <strong>Desarrollador Back‑end freelance</strong>,
                  mejorando un <strong>sistema de facturación</strong> en <strong>PHP/MySQL</strong> y generando
                  <strong> documentos PDF</strong> bajo metodología <strong>Agile</strong>.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-white text-sm md:text-base max-w-xs">
                      <strong>Experiencia con:</strong>
                      <br />
                      <Experience />
                    </p>
                  </div>
                </div>
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
                Mi carrera informática comenzó como <strong>Técnico de Sistemas</strong>, donde administraba redes <strong>Windows/Linux</strong>,
                automatizaba <strong>copias de seguridad</strong> y documentaba <strong>procesos críticos</strong>.
              </p>

              <p className="text-base">
                He desarrollado <strong>soluciones digitales</strong> para diversos sectores,
                desde <strong>optimización de sistemas internos</strong> hasta <strong>aplicaciones web completas</strong>,
                siempre priorizando <strong>rendimiento</strong>, <strong>código limpio</strong> y <strong>accesibilidad</strong>.
              </p>

              <p className="text-base">
                Actualmente soy <strong>Full‑stack Developer en prácticas</strong> donde desarrollo y mantengo una plataforma
                <strong> React</strong> + <strong>Symfony</strong>: implementé <strong>Tailwind CSS</strong>, rediseñé los <strong>flujos de autenticación</strong> y optimicé <strong>consultas</strong> para mejorar el <strong>rendimiento</strong>.
              </p>

              <p className="text-base">
                Anteriormente colaboré como <strong>Desarrollador Back‑end freelance</strong>, mejorando un <strong>sistema de facturación</strong> en <strong>PHP/MySQL</strong>
                y generando <strong>documentos PDF</strong> bajo metodología <strong>Agile</strong>.
              </p>
              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-white text-sm md:text-base max-w-xs">
                    <strong>Experiencia con:</strong>
                    <br />
                    <Experience />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MobileView>
    </>
  );
}
