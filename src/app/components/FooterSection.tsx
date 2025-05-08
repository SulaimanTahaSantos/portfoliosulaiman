import Link from "next/link";
import type { RefObject } from "react";

interface FooterSectionProps {
  divRef: RefObject<HTMLDivElement | null>;
}

export default function FooterSection({ divRef }: FooterSectionProps) {
  return (
    <div
      ref={divRef}
      className="min-h-screen flex flex-col justify-between bg-[#3b1a68] text-white p-8 md:p-16 lg:p-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-sm uppercase tracking-wider mb-6">Saludame</h2>
            <div className="space-y-4">
              <a
                href="https://mail.google.com/mail/?view=cm&to=sulat3821@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#b9ff64] hover:text-[#d2ff9e] transition-colors"
              >
                Sulaimaneltaha.com
              </a>
            </div>
          </div>
          <div>
            <nav className="space-y-4">
              <Link
                href="#"
                className="block text-[#b9ff64] hover:text-[#d2ff9e] transition-colors"
              >
                Mis proyectos
              </Link>
              <Link
                href="#"
                className="block text-[#b9ff64] hover:text-[#d2ff9e] transition-colors"
              >
                Mi CV
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto w-full">
        <div className="border-t border-[#5a3a87] pt-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="text-[#b9ff64]">
              © Sulaiman El Taha Santos {new Date().getFullYear()}
            </div>
            <div className="flex gap-6">
              <Link
                href="https://github.com/SulaimanTahaSantos?tab=repositories"
                className="text-[#b9ff64] hover:text-[#d2ff9e] transition-colors"
                aria-label="GitHub"
              >
                GH
              </Link>
              <Link
                href="https://www.linkedin.com/in/suleiman-el-taha-santos-6b0054254/"
                className="text-[#b9ff64] hover:text-[#d2ff9e] transition-colors"
                aria-label="LinkedIn"
              >
                LN
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
