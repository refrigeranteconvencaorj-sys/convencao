import { productCategories } from "../constants/products";

const Products = () => {
  return (
    <section id="marcas" className="py-10">
      <div className="container mx-auto space-y-10 px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-6">
            Nossos Produtos
          </h2>
          <p className="md:text-xl max-w-3xl mx-auto text-gray-600">
            Grande portfólio com diversidade de produtos para celebrar vários
            momentos
          </p>
        </div>

        {/* Product Categories */}
        <div className="p-10 space-y-10">
          {productCategories.map((category) => (
            <div key={category.name} className="space-y-5">
              <h2 className="text-3xl font-bold text-center hover:text-gray-600">
                {category.title}
              </h2>

              <div className="flex flex-wrap justify-center gap-4">
                {category.products.map((product) => (
                  <a
                    key={product.name}
                    href={"produtos/" + category.name + "/" + product.name}
                    className="text-center text-xl font-medium space-y-5 transition-colors text-gray-700"
                  >
                    <img
                      className="transform transition-all hover:scale-110"
                      src={product.image}
                      width={300}
                      height={300}
                    />

                    <span>{product.label}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Product Highlight */}
        <div className="rounded-3xl p-8 md:p-12 text-center bg-guarana-gradient text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-5xl font-bold">
              Refrigerantes Convenção
            </h3>

            <p className="md:text-xl leading-relaxed text-justify">
              Nosso produto mais tradicional e querido! O sabor autêntico do
              guaraná brasileiro que conquistou gerações e continua sendo a
              escolha da Família Brasileira.
            </p>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8 text-black">
              <div className="p-4 md:p-6 rounded-xl bg-white bg-opacity-20">
                <h4 className="md:text-xl font-bold">Tradição</h4>
                <p className="text-sm md:text-base">
                  Receita original desde 1951
                </p>
              </div>

              <div className="p-4 md:p-6 rounded-xl bg-white bg-opacity-20">
                <h4 className="md:text-xl font-bold">Qualidade</h4>
                <p className="text-sm md:text-base">
                  Ingredientes selecionados
                </p>
              </div>

              <div className="p-4 md:p-6 rounded-xl bg-white bg-opacity-20">
                <h4 className="md:text-xl font-bold">Sabor</h4>
                <p className="text-sm md:text-base">
                  O sabor que é a cara da Família Brasileira
                </p>
              </div>
            </div>

            <a
              href="/atendimento/onde-encontrar"
              className="px-8 py-4 rounded-lg font-semibold text-lg transition-all transform shadow-lg bg-white text-guarana-green hover:bg-gray-100 hover:scale-105"
            >
              Onde Encontrar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
