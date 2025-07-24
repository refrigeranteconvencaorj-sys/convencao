import trabalheConosco from "../../assets/trabalhe-conosco.png";
import links from "../../constants/links";

const link = `https://formsubmit.co/${links.forms.report}`;

const NewReport = () => {
  const renderForm = () => {
    return (
      <form
        id="formulario"
        className="grid grid-cols-12 space-x-4 space-y-4"
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

        {/* mensagem */}
        <div className="col-span-12">
          <label className="block text-sm font-medium">Mensagem *</label>
          <textarea
            id="mensagem"
            name="mensagem"
            required
            rows={4}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="col-span-2 md:col-span-2 font-medium py-2 px-4 rounded-md transition bg-primary text-white hover:bg-secondary"
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
            <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Canal de Denúcias
            </h2>

            <p className="text-orange-600">
              Basta preencher o formulário abaixo, e não se prrocupe, a denúcia
              é anônima
            </p>

            {renderForm()}
          </div>

          <img
            src={trabalheConosco}
            className="hidden w-full h-full object-cover rounded-xl shadow border transition-all hover:transform hover:scale-105 hover:shadow-xl md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default NewReport;
