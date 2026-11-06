const bars = [
  { month: "Jun", income: 62, expense: 34 },
  { month: "Jul", income: 76, expense: 42 },
  { month: "Ago", income: 57, expense: 38 },
  { month: "Set", income: 88, expense: 49 },
  { month: "Out", income: 70, expense: 43 },
  { month: "Nov", income: 94, expense: 39 }
];

export default function CashFlowPanel() {
  return (
    <section className="panel cashflow-panel">
      <div className="panel-heading">
        <div>
          <h2>Fluxo de caixa</h2>
          <p className="muted">Receitas e despesas ao longo do tempo</p>
        </div>
        <button className="select-button" type="button">Últimos 6 meses⌄</button>
      </div>
      <div className="chart-legend">
        <span><i className="legend-dot income-dot" /> Receitas</span>
        <span><i className="legend-dot expense-dot" /> Despesas</span>
      </div>
      {/* DESAFIO: substituir as barras ilustrativas por dados calculados. */}
      <div className="bar-chart" role="img" aria-label="Gráfico ilustrativo de receitas e despesas">
        <div className="chart-y-labels"><span>6k</span><span>4k</span><span>2k</span><span>0</span></div>
        <div className="chart-area">
          <div className="chart-grid-lines"><i /><i /><i /><i /></div>
          <div className="bar-groups">
            {bars.map((bar) => (
              <div className="bar-group" key={bar.month}>
                <div className="bars">
                  <span className="bar income-bar" style={{ height: `${bar.income}%` }} />
                  <span className="bar expense-bar" style={{ height: `${bar.expense}%` }} />
                </div>
                <span className="bar-label">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
