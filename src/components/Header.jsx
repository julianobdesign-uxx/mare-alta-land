export default function Header({ count, open }) {
  const links = [["Diferenciais","#diferenciais"],["Cardápio","#cardapio"],["Galeria","#galeria"],["Onde estamos","#local"]];
  return (
    <header className="sticky top-0 z-30 backdrop-blur" style={{background:"color-mix(in srgb,var(--bg) 88%,transparent)",borderBottom:"1px solid var(--line)"}}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <a href="#" className="serif text-xl font-bold">Maré Alta</a>
        <nav aria-label="Principal" className="hidden md:flex gap-6 text-sm">
          {links.map(l => <a key={l[0]} href={l[1]} className="hover:underline">{l[0]}</a>)}
        </nav>
        <div className="flex gap-2">
          <a href="#cardapio" className="px-4 py-2.5 rounded-full text-sm font-semibold text-white" style={{background:"var(--navy)"}}>Ver cardápio</a>
          <button onClick={open} className="px-4 py-2.5 rounded-full text-sm font-semibold" style={{border:"1px solid var(--ink)"}} aria-label={`Abrir pedido, ${count} itens`}>Pedido ({count})</button>
        </div>
      </div>
    </header>
  );
}
