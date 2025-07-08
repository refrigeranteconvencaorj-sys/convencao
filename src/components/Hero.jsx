import bannerPrincipal from "../assets/banner_principal.png";
import bannerPrincipalMobile from "../assets/banner_principal-mobile.png";

import { useIsMobile } from "../hooks/useIsMobile";
const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${
            isMobile ? bannerPrincipalMobile : bannerPrincipal
          })`,
        }}
      ></div>

      {/* Content */}
      <div className="z-10 text-center mx-auto">
        <div className="mt-80 md:mt-100 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#sobre"
            className="bg-guarana-green hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Conheça Nossa História
          </a>

          <a
            href="#marcas"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            Nossos Produtos
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
