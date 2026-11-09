import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import SummaryCards from "./components/SummaryCards.jsx";
import CashFlowPanel from "./components/CashFlowPanel.jsx";
import SpendingBreakdown from "./components/SpendingBreakdown.jsx";
import TransactionsPanel from "./components/TransactionsPanel.jsx";
import TransactionForm from "./components/TransactionForm.jsx";

import { transactionsBase } from "./data/transactions.js";
import { summaryCategories } from "./data/summary.js"
import {useEffect, useState, useMemo} from "react";

export default function App() {
    const [showForm, setShowForm] = useState(false);

    const [transactions, setTransactions] = useState(() => {
        const savedTransactions = localStorage.getItem("transactions");

        return savedTransactions ? JSON.parse(savedTransactions) : transactionsBase;
    });

    const totals = useMemo(() => {
        return transactions.reduce((acc, item) => {
            if (item.type === "income") {
                acc.income += item.amount;
            }

            if (item.type === "expense") {
                acc.expense += item.amount;
            }

            return acc;
        }, {income: 0, expense: 0});
    }, [transactions]);

    const balance = totals.income - totals.expense;
    const savingsPercentage = totals.income > 0 ? (balance / totals.income) * 100 : 0;

    const summary = useMemo(() => {
        return summaryCategories.map((item) => {
            let value = 0;
            let change = "";
            let tone = "neutral";

            switch (item.id) {
                case 1:
                    value = balance;
                    tone = balance >= 0 ? "positive" : "negative";
                    break;

                case 2:
                    value = totals.income;
                    tone = "positive";
                    break;

                case 3:
                    value = totals.expense;
                    tone = "negative";
                    break;

                case 4:
                    value = balance;
                    change = `${savingsPercentage.toFixed(1)}% da receita`;
                    tone = "positive";
                    break;
            }

            return {
                ...item,
                value: value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}),
                change,
                tone,
            };
        });
    }, [totals, balance, savingsPercentage]);

    function handleAddTransaction(newTransaction) {
        if (newTransaction.type == "expense") {

        } else { // income

        }

        setTransactions((previous) => [
            newTransaction,
            ...previous,
        ]);
    }

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }, [transactions]);

    useEffect(() => {
        localStorage.setItem("summary", JSON.stringify(summary));
    }, [summary]);

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
                        <SpendingBreakdown transactionsBase={transactions}/>
                    </section>

                    <TransactionsPanel items={transactions}/>
                </div>
            </main>
        </div>
    );
}
