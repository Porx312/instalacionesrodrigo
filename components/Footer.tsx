import Link from "./Link";
import siteMetadata from "@/data/siteMetadata";
import SocialIcon from "@/components/social-icons";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{siteMetadata.author}</span>
            <span className="hidden sm:inline">•</span>
            <span>{`© ${new Date().getFullYear()}`}</span>
          </div>
          <nav className="mt-4 sm:mt-0">
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
          <Link href="/" className="hover:underline">
            {siteMetadata.title}
          </Link>{" "}
          - Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
