import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D0A42] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-6">Saludame</h3>
            <div className="space-y-2">
              <p>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=sulat3821@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#b9ff64] hover:text-[#d2ff9e] transition-colors"
                >
                  sulaimaneltaha.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex justify-start md:justify-center">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-[#B4FF39] hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#B4FF39] hover:underline">
                    Mis proyectos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#B4FF39] hover:underline">
                    Mi CV
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-700 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © Sulaiman El Taha Santos {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex space-x-8">
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
  );
}
