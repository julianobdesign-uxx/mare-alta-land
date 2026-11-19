import { useState } from "react";
import { MENU, ALL } from "../data/menu";
import { brl } from "../lib/utils";
import Photo from "./Photo";

export default function Menu({ add }) {
  const cats = ["Todos", ...Object.keys(MENU)];
  const [cat, setCat] = useState("Todos");
  const items = cat === "Todos" ? ALL : MENU[cat];
  return (
    <section id="cardapio" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold">Cardápio</h2>
      <p className="mt-2" style={{color:"var(--muted)"}}>Cardápio demonstrativo com pratos da culinária regional. Preços a definir.</p>
      <div role="tablist" aria-label="Categorias" className="flex gap-2 overflow-x-auto py-5">
        {cats.map(c => <button key={c} role="tab" aria-selected={c===cat} onClick={()=>setCat(c)}
          className="px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap"
          style={c===cat?{background:"var(--navy)",color:"#fff"}:{border:"1px solid var(--line)",background:"var(--card)"}}>{c}</button>)}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(it => <article key={it.id} className="rounded-2xl overflow-hidden flex flex-col" style={{background:"var(--card)",border:"1px solid var(--line)"}}>
          <div className="aspect-[16/10]"><Photo k={it.foto} label={it.nome}/></div>
          <div className="p-5 flex flex-col gap-2 flex-1">
            <h3 className="text-lg font-bold">{it.nome}</h3>
            <p className="text-sm flex-1" style={{color:"var(--muted)"}}>{it.desc}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="font-semibold">{brl(it.preco)}</span>
              <button onClick={()=>add(it.id)} className="px-4 py-2.5 rounded-full text-sm font-semibold text-white" style={{background:"var(--olive)"}}>Adicionar</button>
            </div>
          </div>
        </article>)}
      </div>
    </section>
  );
}
