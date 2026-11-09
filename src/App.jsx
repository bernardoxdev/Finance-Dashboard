import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import SummaryCards from "./components/SummaryCards.jsx";
import CashFlowPanel from "./components/CashFlowPanel.jsx";
import SpendingBreakdown from "./components/SpendingBreakdown.jsx";
import TransactionsPanel from "./components/TransactionsPanel.jsx";
import TransactionForm from "./components/TransactionForm.jsx";

import { transactionsBase } from "./data/transactions.js";
import { summaryBase } from "./data/summary.js"
import { useState } from "react";

export default function App() {
    const [transactions, setTransactions] = useState(transactionsBase);
    const [summary, setSummary] = useState(summaryBase);
    const [showForm, setShowForm] = useState(false);

    function handleAddTransaction(newTransaction) {
        setTransactions((previous) => [
            newTransaction,
            ...previous,
        ]);
    }

    return (
        <div className="app-shell">
            {showForm && (
                <TransactionForm
                    onClose={() => setShowForm(false)}
                    onSubmit={handleAddTransaction}
                />
            )}
            <Sidebar/>
            <main className="main-content">
                <Header/>
                <div className="page-content">
                    <section className="welcome-row">
                        <div>
                            <p className="eyebrow">VISÃO GERAL</p>
                            <h1>Seu dinheiro, sob controle.</h1>
                            <p className="muted">Acompanhe sua vida financeira em um só lugar.</p>
                        </div>
                        <button className="button button-primary" type="button" onClick={() => setShowForm(true)}>
                            <span aria-hidden="true">＋</span> Nova transação
                        </button>
                    </section>

                    <SummaryCards items={summary}/>

                    <section className="dashboard-grid">
                        <CashFlowPanel/>
                        <SpendingBreakdown/>
                    </section>

                    <TransactionsPanel items={transactions}/>
                </div>
            </main>
        </div>
    );
}
