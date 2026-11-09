import { useState } from "react";
import "../styles/transactionForm.css";

export default function TransactionForm({ onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        date: new Date().toISOString().split("T")[0],
        amount: "",
        type: "expense",
    });

    function formatDate(date) {
        return new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).replace(".", "");
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (
            !formData.title.trim() ||
            !formData.category ||
            !formData.amount ||
            Number(formData.amount) <= 0
        ) {
            alert("Preencha todos os campos corretamente.");
            return;
        }

        const newTransaction = {
            id: crypto.randomUUID(),
            ...formData,
            date: formatDate(formData.date),
            amount: Number(formData.amount),
            symbol: formData.type === "income" ? "+" : "-",
        };

        onSubmit(newTransaction);
        onClose();
    }

    return (
        <div className="transaction-modal-overlay" onClick={onClose}>
            <div
                className="transaction-modal"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="transaction-modal-header">
                    <div>
                        <h2>Nova transação</h2>
                        <p>Adicione uma receita ou despesa à sua conta.</p>
                    </div>

                    <button
                        type="button"
                        className="close-modal"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Tipo de transação</label>

                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <option value="expense">Despesa</option>
                            <option value="income">Receita</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Nome da transação</label>

                        <input
                            type="text"
                            name="title"
                            placeholder="Ex: Conta de internet"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Categoria</label>

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="">Selecione</option>
                                <option value="Moradia">Moradia</option>
                                <option value="Alimentação">Alimentação</option>
                                <option value="Transporte">Transporte</option>
                                <option value="Saúde">Saúde</option>
                                <option value="Lazer">Lazer</option>
                                <option value="Salário">Salário</option>
                                <option value="Investimentos">Investimentos</option>
                                <option value="Outros">Outros</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Data</label>

                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Valor (R$)</label>

                        <input
                            type="number"
                            name="amount"
                            placeholder="0,00"
                            min="0.01"
                            step="0.01"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="transaction-form-actions">
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>

                        <button type="submit" className="submit-button">
                            Salvar transação
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
