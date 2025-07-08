import bannerSaudabilidade from "../assets/banner-saudabilidade.jpg";

const Terms = () => {
  return (
    <section id="healthiness" className="space-y-5">
      <img
        src={bannerSaudabilidade}
        alt="Refrigerantes Convenção"
        className="h-full"
      />

      <section className="px-20 py-30 md:px-50">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 text-primary">
          Saudabilidade Refrigerantes Convenção
        </h2>

        <hr className="p-2 w-50 mx-auto border-t-6" />

        <p className="mt-2 text-center text-base">
          A Refrigerantes Convenção tem um portfólio de produtos que atende
          todas as necessidades de nossos clientes e consumidores. Estamos nos
          atualizando em todos os estudos e pesquisas relacionadas aos
          refrigerantes.
        </p>

        <p className="mt-2 text-center text-base">
          Alguns estudos associam a ingestão de bebidas açucaradas com a
          diabetes e obesidade. Pesquisas revelam que o excesso de peso é um
          fator de risco para o diabetes. Consumir muitos alimentos e bebidas
          com alto valor energético podem contribuir para o aumento de peso e
          consequentemente as chances de adquirir o diabetes tipo 2.
        </p>

        <p className="mt-2 text-center text-base">
          O consumo moderado de alimentos e bebidas e a prática regular de
          atividades físicas são maneiras de se manter saudável. Para os
          consumidores que querem reduzir a ingestão de açúcar e calorias, a
          Refrigerantes Convenção oferece opções de bebidas com sabor e
          qualidade com redução de açúcar e zero calorias. Também, oferece
          diversos tamanhos de embalagens com todas as informações nutricionais
          nos rótulos para ajudar os consumidores a fazerem suas escolhas
          ideais.
        </p>
      </section>

      <section className="px-20 py-30 md:px-50 grid grid-cols-2 space-x-10 bg-primary text-white">
        <div className="space-y-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">
              MENOS SÓDIO E SEM CONSERVANTES
            </h2>

            <hr className="my-4 w-50 border-t-6 border-t-[#ff7500]" />

            <p className="text-base">
              A redução do teor de sódio e conservantes estão de acordo com as
              novas recomendações do Ministério da Saúde e a Associação
              Brasileira de Indústria de Alimentação (ABIA). A Refrigerantes
              Convenção está ciente dos desafios da saudabilidade e por isso,
              reduziu o sódio e a utilização de conservantes no seu portfólio de
              produtos. O refrigerante Chinotto já é resultado dessa inovação e
              não possui nenhum conservante em sua composição.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold">
              GUARANÁ DA AMAZÔNIA
            </h2>

            <hr className="my-4 w-50 border-t-6 border-t-[#ff7500]" />
            <p className="text-base">
              O Guaraná Convenção é feito com o fruto da Amazônia. Com isso, a
              Refrigerantes Convenção estimula a agricultura local e oferece um
              produto com sabor e qualidade desde 1951.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">MENOS AÇÚCAR</h2>

            <hr className="my-4 w-50 border-t-6 border-t-[#ff7500]" />

            <p className="text-base">
              Reduzimos o açúcar, utilizando alguns ingredientes substitutos
              conhecidos como edulcorantes naturais e artificiais que mantém o
              sabor doce, de baixa caloria.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold">ZERO AÇÚCAR</h2>

            <hr className="my-4 w-50 border-t-6 border-t-[#ff7500]" />

            <p className="text-base">
              Para aqueles que seguem uma dieta ou alguma enfermidade, a
              Refrigerantes Convenção tem o Guaraná sem açúcar.
            </p>
          </div>
==
        </div>
      </section>

      <section className="px-20 py-30 md:px-50">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6 text-primary">
          MENSAGEM DO PRESIDENTE
        </h2>

        <hr className="p-2 w-50 mx-auto border-t-6" />

        <p className="mt-2 text-center text-base">
          A Refrigerantes Convenção está no mercado desde 1951, buscamos atender
          da melhor forma os nossos consumidores, garantindo a qualidade e sabor
          em todos os produtos.
          <br />
          Obrigado pela sua confiança! Geraldo Guitti
          <br />
          Diretor Presidente
        </p>
      </section>
    </section>
  );
};

export default Terms;
