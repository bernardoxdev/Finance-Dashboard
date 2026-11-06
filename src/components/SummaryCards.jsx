export default function SummaryCards({ items }) {
  return (
    <section className="summary-grid" aria-label="Resumo financeiro">
      {items.map((item) => (
        <article className="summary-card" key={item.label}>
          <div className="summary-top">
            <span className="summary-label">{item.label}</span>
            <span className="summary-icon">{item.icon}</span>
          </div>
          <strong className="summary-value">{item.value}</strong>
          <span className={`change ${item.tone}`}>{item.change}</span>
        </article>
      ))}
    </section>
  );
}
