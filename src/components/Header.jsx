import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";

import logo from "../assets/logo.png";
import links from "../constants/links";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="py-5">
            <img
              src={logo}
              alt="Refrigerantes Convenção"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#home"
              className="text-gray-700 hover:text-guarana-green transition-colors font-medium"
            >
              Principal
            </a>
            <a
              href="/#sobre"
              className="text-gray-700 hover:text-guarana-green transition-colors font-medium"
            >
              Sobre
            </a>
            <a
              href="/#marcas"
              className="text-gray-700 hover:text-guarana-green transition-colors font-medium"
            >
              Marcas
            </a>
            <a
              href="/#sustentabilidade"
              className="text-gray-700 hover:text-guarana-green transition-colors font-medium"
            >
              Sustentabilidade
            </a>
            <a
              href="/#atendimento"
              className="text-gray-700 hover:text-guarana-green transition-colors font-medium"
            >
              Atendimento
            </a>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={links.facebook}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <SiFacebook size={20} />
            </a>
            <a
              href={links.instagram}
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <SiInstagram size={20} />
            </a>
            <a
              href={links.linkedin}
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height="20px"
                width="20px"
                version="1.1"
                viewBox="0 0 382 382"
              >
                <path
                  fill="#0077B7"
                  d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  L341.91,330.654L341.91,330.654z"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-guarana-green transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="/#home"
                className="text-gray-700 hover:text-guarana-green transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Principal
              </a>
              <a
                href="/#sobre"
                className="text-gray-700 hover:text-guarana-green transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="/#marcas"
                className="text-gray-700 hover:text-guarana-green transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Marcas
              </a>
              <a
                href="/#sustentabilidade"
                className="text-gray-700 hover:text-guarana-green transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sustentabilidade
              </a>
              <a
                href="/#atendimento"
                className="text-gray-700 hover:text-guarana-green transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Atendimento
              </a>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200">
              <a
                href={links.facebook}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href={links.instagram}
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href={links.linkedin}
                className="text-gray-600 hover:text-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  height="20px"
                  width="20px"
                  version="1.1"
                  viewBox="0 0 382 382"
                >
                  <path
                    fill="#0077B7"
                    d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  L341.91,330.654L341.91,330.654z"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
