import type { RefObject } from "react";
import DotPattern from "@/app/components/DotPattern";
import StairPattern from "@/app/components/StairPattern";

interface SkillsSectionProps {
  divRef: RefObject<HTMLDivElement | null>;
}

export default function SkillsSection({ divRef }: SkillsSectionProps) {
  return (
    <div ref={divRef} className="min-h-screen bg-white">
      <section className="relative py-32 px-4 container mx-auto">
        <div className="max-w-2xl ml-12 md:ml-24">
          <h2 className="text-6xl md:text-7xl font-bold text-[#4834C9] mb-6">
            Diseño
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            En el diseño de aplicaciones con JavaScript y PHP, me enfoco en
            crear experiencias de usuario atractivas y funcionales. Desarrollo
            interfaces intuitivas que mejoran la usabilidad y satisfacción del
            usuario. Siempre busco la simplicidad y elegancia en cada proyecto.
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
            Como desarrollador frontend con React/Next.js y TypeScript, creo
            aplicaciones web rápidas y eficientes. Utilizo las últimas
            tecnologías y mejores prácticas para garantizar un rendimiento
            óptimo y una experiencia fluida. Me especializo en integración con
            APIs RESTful.
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
  );
}
