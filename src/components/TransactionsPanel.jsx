function formatAmount(amount, type) {
  const formatted = amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  return `${type === "income" ? "+" : "−"} ${formatted}`;
}

export default function TransactionsPanel({ items }) {
  return (
    <section className="panel transactions-panel">
      <div className="panel-heading transactions-heading">
        <div>
          <h2>Transações recentes</h2>
          <p className="muted">Acompanhe as últimas movimentações da sua conta</p>
        </div>
        <button className="button button-secondary" type="button">Ver todas <span>→</span></button>
      </div>

      <div className="table-toolbar">
        {/* DESAFIO: conectar os campos aos filtros de verdade. */}
        <input className="search-input" type="search" placeholder="⌕  Buscar transação..." aria-label="Buscar transação" />
        <button className="select-button" type="button">Todas as categorias⌄</button>
        <button className="select-button" type="button">Este mês⌄</button>
      </div>

      <div className="table-scroll">
        <table className="transactions-table">
          <thead>
            <tr><th>TRANSAÇÃO</th><th>CATEGORIA</th><th>DATA</th><th>VALOR</th><th /></tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="transaction-title">
                    <span className={`transaction-symbol ${item.type}`}>{item.symbol}</span>
                    <strong>{item.title}</strong>
                  </div>
                </td>
                <td><span className="category-pill">{item.category}</span></td>
                <td className="date-cell">{item.date}</td>
                <td className={`amount-cell ${item.type}`}>{formatAmount(item.amount, item.type)}</td>
                <td><button className="row-menu" type="button" aria-label={`Opções para ${item.title}`}>···</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
