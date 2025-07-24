import refrigerantes_convencao from "../../assets/refrigerantes_convencao.jpeg";
import links from "../../constants/links";

const link = `https://formsubmit.co/${links.forms.sac}`;

const SAC = () => {
  const renderForm = () => {
    return (
      <form
        id="formulario"
        className="grid grid-cols-2 space-x-4 space-y-4"
        name="formulario"
        action={link}
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://guaranaconvencaorj.com.br"
        />

        {/* nome */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium">Nome *</label>
          <input
            id="nome"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            name="nome"
            type="text"
            required
            placeholder="Digite seu nome"
          />
        </div>

        {/* tel_fixo */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium">Telefone fixo</label>
          <input
            id="tel_fixo"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            name="tel_fixo"
            type="tel"
            placeholder="Digite seu telefone fixo"
            maxLength="15"
          />
        </div>

        {/* tel_cel */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium">Telefone celular</label>
          <input
            id="tel_cel"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            name="tel_cel"
            type="tel"
            placeholder="Digite seu telefone celular"
            maxLength="15"
          />
        </div>

        {/* email */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium">E-mail *</label>
          <input
            id="email"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            name="email"
            required
            type="email"
            placeholder="Digite seu e-mail"
          />
        </div>

        {/* estado */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium">Estado *</label>
          <select
            id="estado"
            name="estado"
            required
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Selecione</option>
            <option value="RJ">Rio de Janeiro </option>
          </select>
        </div>

        {/* cidade */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium">Cidade</label>
          <input
            id="cidade"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            name="cidade"
            type="text"
            placeholder="Digite sua cidade"
          />
        </div>

        {/* mensagem */}
        <div className="col-span-2">
          <label className="block text-sm font-medium">Mensagem</label>
          <textarea
            name="mensagem"
            rows={4}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* aceito */}
        <div className="col-span-2 flex items-start">
          <input id="aceito" name="aceito" type="checkbox" className="m-2" />

          <label>
            Aceito receber em meu e-mail novidades e informações da Convenção.
            <br />
            Fique tranquilo, não vamos encher sua caixa de e-mail.
          </label>
        </div>

        <button
          type="submit"
          className="col-span-2 md:col-span-1 font-medium py-2 px-4 rounded-md transition bg-primary text-white hover:bg-secondary"
        >
          Enviar
        </button>
      </form>
    );
  };

  return (
    <section id="customer" className="py-5 bg-white">
      <div className="container mx-auto min-h-screen px-6 md:py-5 md:px-10">
        <div className="grid md:grid-cols-2 md:space-x-10">
          <div className="space-y-5">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Atendimento ao Consumidor (SAC)
            </h2>

            <p className="text-base">
              Possui alguma dúvida, sugestão ou reclamação? Nós queremos ouvir
              você!
            </p>

            {renderForm()}
          </div>

          <img
            src={refrigerantes_convencao}
            className="hidden w-full h-full object-cover rounded-xl shadow border transition-all hover:transform hover:scale-105 hover:shadow-xl md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default SAC;
