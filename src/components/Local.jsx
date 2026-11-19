import { CONFIG } from "../data/config";

export default function Local() {
  return (
    <section id="local" className="max-w-6xl mx-auto px-4 pb-14 grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold">Onde estamos</h2>
        <p className="mt-4">{CONFIG.endereco}</p>
        <ul className="mt-4 space-y-1" style={{color:"var(--muted)"}}>{CONFIG.horarios.map(h => <li key={h}>{h}</li>)}</ul>
        <p className="mt-4">Telefone: {CONFIG.telefone}</p>
      </div>
      <div className="rounded-2xl min-h-[220px] flex items-center justify-center text-center p-6" style={{border:"2px dashed var(--line)",color:"var(--muted)"}}>Espaço para o mapa do endereço real</div>
    </section>
  );
}
