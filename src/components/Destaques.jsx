import { ALL } from "../data/menu";
import Photo from "./Photo";

export default function Destaques({ add }) {
  const d = ALL.filter(i => i.destaque);
  return (
    <section className="py-14" style={{background:"var(--sand)",color:"#10223A"}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Pratos especiais</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {d.map(it => <div key={it.id} className="rounded-2xl overflow-hidden bg-white">
            <div className="aspect-[4/3]"><Photo k={it.foto} label={it.nome}/></div>
            <div className="p-5"><h3 className="text-xl font-bold">{it.nome}</h3><p className="text-sm mt-1 text-slate-600">{it.desc}</p>
              <button onClick={()=>add(it.id)} className="mt-4 px-4 py-2.5 rounded-full text-sm font-semibold text-white" style={{background:"#0B2545"}}>Pedir este prato</button></div>
          </div>)}
        </div>
      </div>
    </section>
  );
}
