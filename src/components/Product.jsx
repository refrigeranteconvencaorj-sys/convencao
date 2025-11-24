import NutritionTable from "./NutritionTable";

import { productCategories } from "../constants/products";

const Product = ({ categoryId = "", id = "" }) => {
  const category = productCategories.find((item) => item.name == categoryId);
  if (!category) return <></>;

  const product = category.products.find((item) => item.name == id);
  if (!product) return <></>;

  return (
    <section id="product" className="min-h-screen py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10 md:text-5xl">
          {product.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-full md:h-150">
            <img
              key={product.id}
              src={product.image}
              className="h-full mx-auto object-cover transition-all hover:transform hover:scale-105 hover:shadow-xl"
            />
          </div>

          <div className="space-y-8">
            <table className="min-w-full border border-gray-300 text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    colSpan={product.sizes.length}
                    className="text-center px-4 py-2 border-b"
                  >
                    Tamanhos disponíveis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  {product.sizes.map((t, i) => (
                    <td key={i} className="text-center px-4 py-2 border-b">
                      {t}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <NutritionTable
              energyValue={product.energyValue}
              carbohydrates={product.carbohydrates}
              totalSugars={product.totalSugars}
              addedSugars={product.addedSugars}
              sodium={product.sodium}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
