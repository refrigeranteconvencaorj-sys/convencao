import fabrica1 from "../assets/convencao-fabrica.jpg";
import refrigerantesConvencao from "../assets/refrigerantes_convencao.jpeg";

const VisitFactory = () => {
  const renderContent = () => {
    return (
      <div className="container mx-auto min-h-screen py-10 px-10">
        <div className="grid grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Visite nossa fábrica
            </h2>
            <p>
              A Refrigerantes Convenção iniciou suas atividades em 1951. De lá
              para cá, foram muitos sabores, rótulos, produtos e relacionamentos
              que fizeram e fazem parte dessa história.
            </p>
            <p>
              Quer conhecer de perto a fabricação dos produtos Convenção? Você é
              nosso convidado especial!
            </p>
            <p>
              Venha conhecer esse universo e acompanhar de perto o nosso
              dia-a-dia, cultura, valores, iniciativa e claro, ver de perto como
              são produzidos os diversos produtos que fazem parte do dia-a-dia
              das famílias brasileiras.
            </p>
            <p>
              As visitas são realizadas na empresa de Caieiras cidade há 20km da
              capital paulista.
            </p>
            <ul>
              <li>
                Dias das visitas: Terça e Quinta, das 10h às 11:30 e das 14h às
                15:30;
              </li>

              <li>Ingresso: Inteira - R$ 20,00 / Meia - R$ 10,00;</li>

              <li>Forma de pagamento: depósito ou transferência bancária;</li>

              <li>Limite de 30 pessoas por turma;</li>

              <li>Transporte não incluso.</li>
            </ul>

            <p>
              Para agendar a sua visita, faça seu agendamento preenchendo as
              informações solicitadas abaixo.
            </p>
          </div>

          <img
            src={fabrica1}
            className="w-full h-full object-cover rounded-xl shadow border transition-all hover:transform hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>
    );
  };

  const renderContact = () => {
    return (
      <div className="container mx-auto min-h-screen py-10 px-10">
        <div className="grid grid-cols-2 space-x-10">
          <div className="space-y-10">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ficou interessado(a)?
            </h2>

            <p className="text-orange-600">
              Preencha as informações abaixo que em breve retornaremos com a
              confirmação do seu agendamento.
            </p>

            {/* TODO: Formulário de contato */}
          </div>

          <img
            src={refrigerantesConvencao}
            className="w-full h-full object-cover rounded-xl shadow border transition-all hover:transform hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>
    );
  };

  return (
    <section id="gallery" className="py-10 bg-white">
      {renderContent()}
      {renderContact()}
    </section>
  );
};

export default VisitFactory;
