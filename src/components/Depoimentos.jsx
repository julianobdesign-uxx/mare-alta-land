export default function Depoimentos() {
  const t = ["Depoimento demonstrativo: “Moqueca no ponto e atendimento atencioso.”","Depoimento demonstrativo: “Porções generosas, perfeitas para a família.”","Depoimento demonstrativo: “Ambiente agradável e peixe muito fresco.”"];
  return (
    <section className="max-w-6xl mx-auto px-4 pb-14">
      <h2 className="text-3xl md:text-4xl font-bold">O que dizem os clientes</h2>
      <p className="text-sm mt-2" style={{color:"var(--muted)"}}>Avaliações fictícias, apenas para demonstração do layout.</p>
      <div className="grid md:grid-cols-3 gap-5 mt-6">
        {t.map((x,i) => <blockquote key={i} className="rounded-2xl p-6" style={{background:"var(--card)",border:"1px solid var(--line)"}}>{x}<footer className="mt-3 text-sm" style={{color:"var(--muted)"}}>— Cliente fictício {i+1}</footer></blockquote>)}
      </div>
    </section>
  );
}
