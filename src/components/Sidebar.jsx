const navigation = [
  { icon: "▦", label: "Visão geral", active: true },
  { icon: "⇄", label: "Transações" },
  { icon: "◷", label: "Orçamentos" },
  { icon: "▥", label: "Relatórios" }
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <a className="brand" href="#" aria-label="Finanças, início">
        <span className="brand-mark">f.</span>
        <span>finanças<span className="brand-dot">.</span></span>
      </a>

      <div className="nav-label">MENU PRINCIPAL</div>
      <nav className="navigation" aria-label="Navegação principal">
        {navigation.map((item) => (
          <a
            className={`nav-item ${item.active ? "active" : ""}`}
            href="#"
            key={item.label}
          >
            <span className="nav-icon" aria-hidden="true">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <div className="upgrade-icon">✧</div>
          <strong>Tenha mais controle</strong>
          <p>Organize suas metas e acompanhe seu progresso.</p>
          <button type="button" className="upgrade-link">Conhecer recursos <span>→</span></button>
        </div>
        <div className="profile">
          <div className="avatar">BC</div>
          <div className="profile-copy">
            <strong>Bernardo Castro</strong>
            <span>Conta pessoal</span>
          </div>
          <span className="profile-more">···</span>
        </div>
      </div>
    </aside>
  );
}
