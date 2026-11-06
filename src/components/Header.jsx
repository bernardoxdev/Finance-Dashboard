export default function Header() {
    const dataAtual = new Date();

    const nomeDoMes = dataAtual.toLocaleDateString('pt-BR', { month: 'long' });
    const nomeDoMesFormatado = nomeDoMes.charAt(0).toUpperCase() + nomeDoMes.slice(1);
    const anoAtual = dataAtual.getFullYear();

  return (
    <header className="topbar">
      <div className="breadcrumb">Workspace <span>/</span> <strong>Visão geral</strong></div>
      <div className="topbar-actions">
        <button className="icon-button" type="button" aria-label="Pesquisar">⌕</button>
        <button className="icon-button notification" type="button" aria-label="Notificações">♧<i /></button>
        <div className="topbar-date">{nomeDoMesFormatado}, {anoAtual}</div>
      </div>
    </header>
  );
}
