# Finance Dashboard — desafio React

Template visual para você implementar a lógica. O projeto usa Vite + React e CSS puro.

## Como executar

```bash
npm install
npm run dev
```

Abra o endereço indicado pelo Vite no terminal.

## O que já está pronto

- Estrutura inicial do Vite + React.
- Sidebar e cabeçalho.
- Cards de resumo.
- Painel visual de fluxo de caixa.
- Distribuição de despesas por categoria.
- Tabela de transações.
- Layout responsivo.
- Dados estáticos de demonstração.

## O que você deve implementar

### Etapa 1 — Estado
- [ ] Criar estado para a lista de transações com `useState`.
- [ ] Criar estado para os campos do formulário.
- [ ] Criar estado para os filtros.

### Etapa 2 — Operações
- [ ] Adicionar uma receita ou despesa.
- [ ] Excluir uma transação.
- [ ] Editar uma transação.
- [ ] Validar os campos obrigatórios.

### Etapa 3 — Dados calculados
- [ ] Calcular saldo total.
- [ ] Calcular receitas do mês.
- [ ] Calcular despesas do mês.
- [ ] Calcular economia mensal.
- [ ] Agrupar despesas por categoria.
- [ ] Fazer o gráfico refletir os dados reais.

### Etapa 4 — Filtros
- [ ] Pesquisar pelo nome da transação.
- [ ] Filtrar por categoria.
- [ ] Filtrar por tipo (receita/despesa).
- [ ] Filtrar por período.

### Etapa 5 — Persistência e qualidade
- [ ] Persistir os dados em `localStorage`.
- [ ] Exibir estado vazio quando não houver transações.
- [ ] Exibir feedback de sucesso e erro.
- [ ] Testar os principais fluxos.

## Regras do desafio

1. Não instale bibliotecas de gerenciamento de estado.
2. Prefira componentes pequenos e reutilizáveis.
3. Não manipule o DOM diretamente.
4. Não altere os dados originais ao filtrar ou ordenar.
5. Use `key` estável ao renderizar listas.
6. Faça commits pequenos e descritivos.

## Critérios de conclusão

O desafio estará concluído quando for possível cadastrar, editar, excluir, pesquisar e filtrar transações, e quando os indicadores e gráficos forem atualizados de acordo com os dados.
