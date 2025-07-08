import { contactChannels } from "../constants/contact";

const Contact = () => {
  return (
    <section id="atendimento" className="py-10 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 text-gray-800">
            Canal de Atendimento
          </h2>
          <p className="md:text-xl max-w-3xl mx-auto text-gray-600">
            Dúvidas, Parcerias ou Oportunidades?
          </p>
          <p className="text-sm md:text-xl max-w-3xl mx-auto text-gray-500">
            Encontre o canal certo para falar conosco.
          </p>
        </div>

        {/* Contact Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactChannels.map((channel, index) => (
            <div
              key={index}
              className="p-8 text-center md:text-left rounded-2xl shadow-lg transition-all hover:shadow-xl bg-white"
            >
              <div className="mb-3 md:mb-6 text-guarana-green">
                {channel.icon}
              </div>
              <h3 className="text-2xl mb-4 font-bold text-gray-800">
                {channel.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                {channel.description}
              </p>
              <a
                href={channel.link}
                className={`${channel.buttonColor} text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md`}
              >
                {channel.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
