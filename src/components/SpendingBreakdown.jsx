import {useMemo} from "react";
import {categories} from "../data/categories.js";

export default function SpendingBreakdown({ transactionsBase }) {
    const valorTotal = useMemo(() => {
        return transactionsBase.reduce((acc, item) => {
            if (item.type === "expense") {
                return acc + item.amount;
            }

            return acc;
        }, 0);
    }, [transactionsBase]);

    const categoriesTratada = [];

    for (let transaction of transactionsBase) {
        if (transaction.type !== "expense") continue;

        const category = categories.find(
            (item) => item.name === transaction.category
        );

        const existingCategory = categoriesTratada.find(
            (item) => item.name === transaction.category
        );

        if (existingCategory) {
            existingCategory.amount += transaction.amount;
        } else {
            categoriesTratada.push({
                name: transaction.category,
                color: category?.color || "gray",
                amount: transaction.amount
            });
        }
    }

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
                <div className="donut-chart">
                    <div>
                        <strong>R$ {valorTotal.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</strong>
                        <span>Total gasto</span>
                    </div>
                </div>
            </div>

            <div className="category-list">
                {categoriesTratada.map((category) => (
                    <div className="category-row" key={category.name}>
                        <span className={`category-dot ${category.color}`}/>
                        <span className="category-name">{category.name}</span>
                        <strong>{category.amount.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</strong>
                    </div>
                ))}
            </div>
        </section>
    );
}
