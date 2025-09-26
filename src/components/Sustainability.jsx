import { initiatives, practices } from "../constants/sustainability";

const Sustainability = () => {
  return (
    <section id="sustentabilidade" className="py-10">
      <div className="container mx-auto space-y-10 px-8">
        {/* Header */}
        <div>
          <h2 className="text-2xl md:text-5xl text-center font-bold text-gray-800 mb-6">
            Compromisso com um Futuro Sustentável
          </h2>
          <p className="md:text-xl max-w-3xl mx-auto text-justify text-gray-600">
            Na Refrigerantes Convenção, cuidar do meio ambiente e promover
            práticas responsáveis é parte essencial do nosso crescimento.
            Conheça nossas iniciativas e como estamos transformando o amanhã.
          </p>
        </div>

        {/* Main Initiatives */}
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index + '_' + initiative.title}
              className={`text-center md:text-left p-8 rounded-2xl space-y-3 transition-all hover:transform hover:scale-105 ${
                initiative.highlight
                  ? "bg-guarana-gradient text-white shadow-2xl"
                  : "bg-gray-50 hover:shadow-xl border"
              }`}
            >
              <div
                className={`${
                  initiative.highlight ? "text-white" : "text-guarana-green"
                }`}
              >
                {initiative.icon}
              </div>

              <h3
                className={`text-2xl font-bold ${
                  initiative.highlight ? "text-white" : "text-gray-800"
                }`}
              >
                {initiative.title}
              </h3>

              <div>
                {initiative.description.map((item, idx) => (
                  <p
                    key={idx + '_' + item.charAt(0)}
                    className={`leading-relaxed text-justify ${
                      initiative.highlight ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* How We Practice Sustainability */}
        <div className="bg-gray-50 rounded-3xl p-4 md:p-12">
          <div className="text-center mb-6 md:mb-12">
            <h3 className="text-2xl md:text-5xl font-bold text-gray-800 mb-6">
              Como Colocamos a Sustentabilidade em Prática
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practices.map((practice, index) => (
              <div key={index + '_' + practice.title} className="text-center group">
                <div className="bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all mb-4">
                  <div className="text-guarana-green mb-4 flex justify-center">
                    {practice.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {practice.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
