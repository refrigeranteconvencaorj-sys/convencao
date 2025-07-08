export default function NutritionTable({
  energyValue,
  carbohydrates,
  totalSugars,
  addedSugars,
  sodium,
  vitaminaB2,
  vitaminaB3,
  vitaminaB5,
  vitaminaB6,
  vitaminaB12,
}) {
  const render = (title = "", opts = []) => {
    return (
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-2 border-b">{title}</td>
        <td className="px-4 py-2 border-b">{opts[0]}</td>
        <td className="px-4 py-2 border-b">{opts[1]}</td>
        <td className="px-4 py-2 border-b">{opts[2]}</td>
      </tr>
    );
  };

  return (
    <section>
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-center px-4 py-2 border-b" colSpan={4}>
              Informação Nutricional
            </th>
          </tr>
          <tr>
            <th className="px-4 py-2 border-b">Componente</th>
            <th className="px-4 py-2 border-b">100ml</th>
            <th className="px-4 py-2 border-b">200ml</th>
            <th className="px-4 py-2 border-b">% VD*</th>
          </tr>
        </thead>
        <tbody>
          {energyValue && render("Valor energético", energyValue)}
          {carbohydrates && render("Carboidratos", carbohydrates)}
          {totalSugars && render("Açúcares total", totalSugars)}
          {addedSugars && render("Açúcares adicionados", addedSugars)}
          {sodium && render("Sódio", sodium)}
          {vitaminaB2 && render("Vitamina B2 (Riboflavina)", vitaminaB2)}
          {vitaminaB3 && render("Vitamina B3 (Riboflavina)", vitaminaB3)}
          {vitaminaB5 && render("Vitamina B5 (Riboflavina)", vitaminaB5)}
          {vitaminaB6 && render("Vitamina B6 (Riboflavina)", vitaminaB6)}
          {vitaminaB12 && render("Vitamina B12 (Riboflavina)", vitaminaB12)}
        </tbody>
      </table>

      <p className="mt-4 text-xs text-gray-500">
        Não contém quantidades significativas de proteínas, gorduras totais,
        gorduras saturadas, gorduras trans e fibras alimentaries.
      </p>

      <p className="mt-4 text-xs text-gray-500">
        * % Valores Diários de referência com base em uma dieta de 2.000 kcal ou
        8.400 kJ. Seus valores diários podem ser maiores ou menores dependendo
        de suas necessidades energéticas.
      </p>
    </section>
  );
}
