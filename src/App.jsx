import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import SummaryCards from "./components/SummaryCards.jsx";
import CashFlowPanel from "./components/CashFlowPanel.jsx";
import SpendingBreakdown from "./components/SpendingBreakdown.jsx";
import TransactionsPanel from "./components/TransactionsPanel.jsx";

// Dados estáticos apenas para visualizar o template.
// DESAFIO: substitua por estado React e implemente as operações.
const summary = [
  { label: "Saldo total", value: "R$ 8.450,00", change: "+8,2%", tone: "positive", icon: "◈" },
  { label: "Receitas do mês", value: "R$ 5.800,00", change: "+12,5%", tone: "positive", icon: "↗" },
  { label: "Despesas do mês", value: "R$ 2.340,00", change: "-4,3%", tone: "negative", icon: "↘" },
  { label: "Economia mensal", value: "R$ 3.460,00", change: "Meta: 30%", tone: "neutral", icon: "◎" }
];

const transactions = [
  { id: 1, title: "Salário", category: "Trabalho", date: "05 nov, 2026", amount: 5800, type: "income", symbol: "↙" },
  { id: 2, title: "Aluguel", category: "Moradia", date: "04 nov, 2026", amount: 1450, type: "expense", symbol: "⌂" },
  { id: 3, title: "Supermercado", category: "Alimentação", date: "03 nov, 2026", amount: 385.5, type: "expense", symbol: "▤" },
  { id: 4, title: "Internet", category: "Contas", date: "02 nov, 2026", amount: 119.9, type: "expense", symbol: "⌁" },
  { id: 5, title: "Freelance", category: "Trabalho", date: "01 nov, 2026", amount: 750, type: "income", symbol: "✦" }
];

export default function App() {
  // DESAFIO: adicionar estado para transações, filtros e formulário.
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="page-content">
          <section className="welcome-row">
            <div>
              <p className="eyebrow">VISÃO GERAL</p>
              <h1>Seu dinheiro, sob controle.</h1>
              <p className="muted">Acompanhe sua vida financeira em um só lugar.</p>
            </div>
            <button className="button button-primary" type="button">
              <span aria-hidden="true">＋</span> Nova transação
            </button>
          </section>

          <SummaryCards items={summary} />

          <section className="dashboard-grid">
            <CashFlowPanel />
            <SpendingBreakdown />
          </section>

          <TransactionsPanel items={transactions} />
        </div>
      </main>
    </div>
  );
}
