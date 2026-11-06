import {useMemo} from "react";

const categories = [
  { name: "Moradia", amount: "R$ 1.450,00", percent: 62, color: "purple" },
  { name: "Alimentação", amount: "R$ 520,00", percent: 22, color: "blue" },
  { name: "Transporte", amount: "R$ 230,00", percent: 10, color: "orange" },
  { name: "Contas", amount: "R$ 140,00", percent: 6, color: "green" }
];

export default function SpendingBreakdown() {
    const valorTotal = useMemo(() => {
       return categories.reduce((acc, item) => {
           return acc + parseInt(item.amount.split(' ')[1].replaceAll(".", ""));
       }, 0);
    });

  return (
    <section className="panel breakdown-panel">
      <div className="panel-heading">
        <div>
          <h2>Despesas por categoria</h2>
          <p className="muted">Distribuição deste mês</p>
        </div>
        <button className="more-button" type="button" aria-label="Mais opções">···</button>
      </div>
      <div className="donut-wrap">
        <div className="donut-chart"><div><strong>R$ {valorTotal}</strong><span>Total gasto</span></div></div>
      </div>
      <div className="category-list">
        {categories.map((category) => (
          <div className="category-row" key={category.name}>
            <span className={`category-dot ${category.color}`} />
            <span className="category-name">{category.name}</span>
            <strong>{category.amount}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
