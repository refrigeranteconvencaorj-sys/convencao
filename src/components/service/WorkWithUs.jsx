import convencaoCaminhao from "../../assets/convencao-caminhao.jpg";

import sheets from "../../constants/sheets";

const WorkWithUs = () => {
  const submit = async (data = {}) => {
    const form = document.getElementById("formulario");

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result.split(",")[1];

        const formData = new FormData();
        formData.append("nome", data.nome);
        formData.append("tel_fixo", data.tel_fixo);
        formData.append("tel_cel", data.tel_cel);
        formData.append("email", data.email);
        formData.append("estado", data.estado);
        formData.append("cidade", data.cidade);
        formData.append("mensagem", data.mensagem);
        formData.append("filename", data.curriculo.name);
        formData.append("filetype", data.curriculo.type);
        formData.append("filedata", base64);

        const res = await fetch(sheets.workWithUs, {
          method: "POST",
          body: formData,
        });

        const text = await res.text();
        alert(text);

        form.reset();
      };

      reader.readAsDataURL(data.curriculo);
    } catch (error) {
      console.log(error.message || error);
      alert("Ocorreu um erro ao enviar o formulário!");
    }
  };

  const renderForm = () => {
    return (
      <form
        id="formulario"
        className="grid grid-cols-2 space-x-4 space-y-4"
        name="formulario"
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.target;
          const data = Object.fromEntries(new FormData(form).entries());
          submit(data);
        }}
      >
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
            <option value="RJ">Rio de Janeiro</option>
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

        {/* curriculo */}
        <div className="col-span-2">
          <label className="block text-sm font-medium">Currículo</label>
          <input
            id="curriculo"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            name="curriculo"
            type="file"
            accept=".pdf"
            placeholder="Anexe seu currículo"
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
            <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800">
              Trabalhe Conosco
            </h2>

            <p className="text-2xl">Quer fazer parte da nossa equipe?</p>

            <p className="text-orange-600">
              Preencha as informações abaixo que em breve retornaremos
            </p>

            {renderForm()}
          </div>

          <img
            src={convencaoCaminhao}
            className="hidden w-full h-full object-cover rounded-xl shadow border transition-all hover:transform hover:scale-105 hover:shadow-xl md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
