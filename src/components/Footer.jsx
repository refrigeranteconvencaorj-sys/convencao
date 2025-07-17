import {
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import { LucideBriefcaseBusiness, MapPin } from "lucide-react";

import logo from "../assets/logo-footer.png";
import selo_verde from "../assets/selo_verde.png";

import links from "../constants/links";

const Footer = () => {
  const sectionNewsLetter = () => {
    return (
      <div className="container flex flex-col md:flex-row items-center gap-0 md:gap-10 mx-auto px-6 md:px-4 py-4 md:py-6 text-center md:text-left">
        <div className="flex flex-col mb-5 md:mb-0">
          <img
            src={logo}
            alt="Refrigerantes Convenção"
            className="h-15 md:h-20"
          />
        </div>

        <div className="flex-1">
          <form
            id="newsletter"
            className="grid grid-cols-12 space-y-4 md:space-x-4 md:space-y-0"
            name="newsletter"
            action="https://www.refrigerantesconvencao.com.br/wp-content/themes/refrigerantes/forms/form-newsletter.php"
            method="post"
            encType="multipart/form-data"
          >
            <div className="col-span-12 md:col-span-2">
              <p className="text-center text-xl font-semibold">
                Assine a nossa Newsletter
              </p>
            </div>

            {/* nome */}
            <div className="col-span-12 md:col-span-4 flex items-center">
              <input
                id="nome"
                className="w-full border rounded-md p-2 text-black bg-white border-gray-300"
                name="nome"
                type="text"
                required
                placeholder="Digite seu nome"
              />
            </div>

            {/* email */}
            <div className="col-span-12 md:col-span-4 flex items-center">
              <input
                id="email"
                className="w-full border rounded-md p-2 text-black bg-white border-gray-300"
                name="email"
                required
                type="email"
                placeholder="Digite seu e-mail"
              />
            </div>

            <div className="col-span-12 md:col-span-2 flex items-center">
              <button
                type="submit"
                className="w-full font-medium py-2 px-4 rounded-md transition bg-orange-500 text-white hover:bg-orange-700"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const sectionContent = () => {
    return (
      <div className="container mx-auto py-4 md:py-6">
        <div className="grid md:grid-cols-5 gap-8">
          {/* INSTITUCIONAL */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-6">INSTITUCIONAL</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#sobre"
                  className="hover:text-green-200 transition-colors"
                >
                  Quem somos
                </a>
              </li>

              <li>
                <a
                  href="/#sustentabilidade"
                  className="hover:text-green-200 transition-colors"
                >
                  Sustentabilidade
                </a>
              </li>

              <li>
                <a
                  href="/saudabilidade"
                  className="hover:text-green-200 transition-colors"
                >
                  Saudabilidade
                </a>
              </li>
            </ul>

            <div className="mt-3 flex flex-col gap-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <LucideBriefcaseBusiness size={16} />
                <span>28.293.066/0001-36</span>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin size={16} />
                <span>
                  Av. Brasil, 44148 - Distrito Industrial Campo Grande - Loteamento 36939 QL3
                  <br />
                  Rio de Janeiro - RJ, 23078-002
                </span>
              </div>
            </div>
          </div>

          {/* PRODUTOS */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-6">PRODUTOS</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#marcas"
                  className="hover:text-green-200 transition-colors"
                >
                  Refrigerantes
                </a>
              </li>

              <li>
                <a
                  href="/produtos/especial/chinotto"
                  className="hover:text-green-200 transition-colors"
                >
                  Chinotto
                </a>
              </li>

              <li>
                <a
                  href="/produtos/especial/msx-convencao"
                  className="hover:text-green-200 transition-colors"
                >
                  Energético MSX 269 ml
                </a>
              </li>
            </ul>
          </div>

          {/* SEJA CLIENTE */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-6">SEJA CLIENTE</h3>

            <ul className="space-y-3">
              <li>
                <a
                  href={links.whatsapp}
                  className="hover:text-green-200 transition-colors"
                >
                  Cadastro de Cliente
                </a>
              </li>
            </ul>
          </div>

          {/* ATENDIMENTO */}
          <div className="col-span-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-6">ATENDIMENTO</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/atendimento/trabalhe-conosco"
                  className="hover:text-green-200 transition-colors"
                >
                  Trabalhe Conosco
                </a>
              </li>

              <li>
                <a
                  href="/atendimento/faq"
                  className="hover:text-green-200 transition-colors"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="/atendimento/sac"
                  className="hover:text-green-200 transition-colors"
                >
                  Atendimento ao Consumidor (SAC)
                </a>
              </li>
            </ul>

            <div className="mt-3 flex flex-col gap-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <SiWhatsapp size={16} className="flex-shrink-0" />
                <a
                  href="tel:+552135263900"
                  className="hover:text-green-200 transition-colors"
                >
                  (21) 3526-3900
                 </a>

                        
              </div>
                            
                 <a> comercial@convencaorj.ind.br </a>
                 <a>financeiro.rj@convencao.ind.br </a>

            </div>
          </div>

          {/* Links */}
          <div className="col-span-1 text-center md:text-left">
            <div className="flex justify-center flex-wrap space-x-4">
              <a
                href={links.facebook}
                className="bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <SiFacebook size={20} />
              </a>

              <a
                href={links.instagram}
                className="bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <SiInstagram size={20} />
              </a>

              <a
                href={links.linkedin}
                className="bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all transform hover:scale-110"
                aria-label="LinkedIn"
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
                    fill="#ffffff"
                    d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  L341.91,330.654L341.91,330.654z"
                  />
                </svg>
              </a>
            </div>

            <img
              src={selo_verde}
              alt="Refrigerantes Convenção"
              className="h-50 p-2 mx-auto mt-10 md:mt-0"
            />
          </div>
        </div>
      </div>
    );
  };

  const sectionCopywritter = () => {
    return (
<div className="container mx-auto py-6">
    <div className="border-t border-white border-opacity-20 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center px-4 md:px-0 gap-y-2">
        <a href="/" className="text-sm justify-self-start md:justify-self-center">
          Convenção RJ © 2025 Convenção | Todos os direitos reservados.
        </a>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 order-last md:order-none">
          <a href="/termos-de-uso" className="text-sm">
            Termos de Uso
          </a>
          <a href="/politica-de-privacidade" className="text-sm">
            Política de Privacidade
          </a>
        </div>

        <a 
          href="https://simplessolucao.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs md:text-sm justify-self-end"
        >
          Feito por Simples Solução TI
        </a>
      </div>
    </div>
  </div>
    );
  };

  return (
    <footer className="bg-guarana-gradient text-white">
      {sectionNewsLetter()}

      {sectionContent()}

      {sectionCopywritter()}
    </footer>
  );
};

export default Footer;
