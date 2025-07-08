import convencaoCaminhao from "../../assets/convencao-caminhao.jpg";

const NewCustomer = () => {
  const renderForm = () => {
    return (
      <form
        id="formulario"
        className="grid grid-cols-4 space-x-4 space-y-4"
        name="formulario"
        action="https://www.refrigerantesconvencao.com.br/wp-content/themes/refrigerantes/forms/form-cadastro-de-cliente.php"
        method="post"
        encType="multipart/form-data"
      >
        {/* perfil */}
        <div className="col-span-4 md:col-span-2">
          <label className="block text-sm font-medium">
            Perfil de atendimento
          </label>
          <select
            id="perfil"
            name="perfil"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Selecione</option>
            <option value="Televendas">Televendas </option>
            <option value="Vendedor presencial">Vendedor presencial</option>
          </select>
        </div>

        {/* tipo */}
        <div className="col-span-4 md:col-span-2 hidden">
          <label className="block text-sm font-medium">Tipo *</label>
          <select
            id="tipo"
            name="tipo"
            required
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          >
            <option selected="selected" value="Cadastro de cliente">
              Cadastro de cliente
            </option>
          </select>
        </div>

        {/* nome */}
        <div className="col-span-4 md:col-span-2">
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

        {/* email */}
        <div className="col-span-4 md:col-span-2">
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

        {/* tel_fixo */}
        <div className="col-span-4 md:col-span-2">
          <label className="block text-sm font-medium">Telefone fixo</label>
          <input
            id="tel_fixo"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            name="tel_fixo"
            type="tel"
            placeholder="Digite seu telefone fixo"
            maxlength="15"
          />
        </div>

        {/* tel_cel */}
        <div className="col-span-4 md:col-span-2">
          <label className="block text-sm font-medium">Telefone celular</label>
          <input
            id="tel_cel"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            name="tel_cel"
            type="tel"
            placeholder="Digite seu telefone celular"
            maxlength="15"
          />
        </div>

        {/* cep */}
        <div className="col-span-2 md:col-span-1">
          <label className="block text-sm font-medium">CEP</label>
          <input
            id="cep"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            name="cep"
            type="text"
            placeholder="Digite seu CEP"
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
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espirito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MT">Mato Grosso</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </div>

        {/* cidade */}
        <div className="col-span-4 md:col-span-2">
          <label className="block text-sm font-medium">Cidade</label>
          <input
            id="cidade"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            name="cidade"
            type="text"
            placeholder="Digite sua cidade"
          />
        </div>

        {/* endereco */}
        <div className="col-span-4 md:col-span-2">
          <label className="block text-sm font-medium">Endereço</label>
          <input
            id="endereco"
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
            name="endereco"
            type="text"
            placeholder="Preencha sue endereco"
          />
        </div>

        {/* mensagem */}
        <div className="col-span-4">
          <label className="block text-sm font-medium">Mensagem *</label>
          <textarea
            id="mensagem"
            name="mensagem"
            required
            rows={4}
            className="mt-1 w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* aceito */}
        <div class="col-span-4 flex items-start">
          <input id="aceito" name="aceito" type="checkbox" className="m-2" />

          <label>
            Aceito receber em meu e-mail novidades e informações da Convenção.
            <br />
            Fique tranquilo, não vamos encher sua caixa de e-mail.
          </label>
        </div>

        <button
          type="submit"
          className="col-span-4 md:col-span-2 font-medium py-2 px-4 rounded-md transition bg-primary text-white hover:bg-secondary"
        >
          Cadastrar
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
              Cadastro de Cliente
            </h2>

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

export default NewCustomer;
