import { stats } from "../constants/about";

import garrafas from "../assets/garrafas.jpg";

const About = () => {
  const sectionHeader = () => {
    return (
      <div className="text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-6">
          História da Refrigerantes Convenção
        </h2>
        <p className="md:text-xl max-w-3xl mx-auto text-gray-600">
          Uma tradição que começou em 1951 e continua sendo o Refrigerante da
          Família Brasileira
        </p>
      </div>
    );
  };

  const sectionAbout = () => {
    return (
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl text-center font-bold text-gray-800">
              Nossa Origem
            </h3>
            <p className="text-sm md:text-base text-justify text-gray-600 leading-relaxed">
              A empresa Refrigerantes Convenção foi fundada em Itu, em 1951. A
              origem da marca foi inspirada na Convenção Republicana de Itu de
              1873. Em 1983, inauguramos a Fábrica no Rio de Janeiro.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl text-center font-bold text-gray-800">
              Atualmente
            </h3>
            <p className="text-sm md:text-base text-justify text-gray-600 leading-relaxed">
              É uma indústria de bebidas que emprega cerca de 280 funcionários,
              possui grande portfólio, do qual fazem parte: refrigerantes em PET
              nos diferentes sabores: guaraná, guaraná zero açúcar, frutaína,
              laranja, uva, limão, Vitt's, abacaxi e cola, energético MSX e
              bebidas diferenciadas, como o Chinotto, bebida à base de extratos
              vegetais com grande tradição na Itália.
              <br />A Convenção Refrigerantes consolida-se no mercado de bebidas
              com uma das melhores empresas por oferecer uma diversidade de
              produtos para celebrar vários momentos e que sempre buscou em seus
              73 anos de existência atender as necessidades e hábitos de seus
              consumidores, aliado a tecnologia, qualidade e respeito.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-100 md:h-2/3">
          <img
            src={garrafas}
            alt="Refrigerantes Convenção"
            className="rounded-lg shadow-2xl w-full h-full"
          />
        </div>
      </div>
    );
  };

  const sectionStats = () => {
    return (
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-lg border shadow-lg transition-shadow hover:shadow-xl"
          >
            <div className="text-guarana-green mb-4 flex justify-center">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">
              {stat.number}
            </div>
            <div className="text-lg font-semibold text-gray-700 mb-1">
              {stat.label}
            </div>
            <div className="text-sm text-gray-500">{stat.description}</div>
          </div>
        ))}
      </section>
    );
  };

  const sectionMission = () => {
    return (
      <section
        id="missao"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
      >
        <div className="py-6 px-6 md:px-12 border rounded-2xl transition-all bg-gray-50 text-black hover:transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-center">
            Nossa Visão
          </h3>
          <p className="md:text-xl text-justify leading-relaxed max-w-4xl mx-auto">
            Ser reconhecida como uma das melhores empresas no segmento de
            bebidas.
          </p>
        </div>

        <div className="py-6 px-6 md:px-12 rounded-2xl transition-all bg-guarana-gradient text-white hover:transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-center">
            Nossa Missão
          </h3>
          <p className="md:text-xl text-justify leading-relaxed max-w-4xl mx-auto">
            Construir o bem social, oferecendo produtos e serviços com
            permanente qualidade, proporcionando oportunidades de crescimento e
            riquezas.
          </p>
        </div>

        <div className="py-6 px-6 md:px-12 border rounded-2xl transition-all bg-gray-50 text-black hover:transform hover:scale-105 hover:shadow-xl">
          <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-center">
            Nossos valores
          </h3>
          <p className="md:text-xl text-justify leading-relaxed max-w-4xl mx-auto">
            Produzir lucratividade e valor para o negócio, respeitando o ser
            humano e o meio ambiente
          </p>
        </div>
      </section>
    );
  };

  return (
    <section id="sobre" className="py-10 bg-white">
      <div className="container mx-auto px-4 space-y-10">
        {sectionHeader()}

        {sectionAbout()}

        {sectionMission()}

        {sectionStats()}
      </div>
    </section>
  );
};

export default About;
