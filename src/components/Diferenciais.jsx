export default function Diferenciais() {
  const d = [["Ingredientes frescos","Peixes e frutos do mar escolhidos todos os dias."],["Preparo artesanal","Temperos e caldos feitos na casa, sem atalhos."],["Experiência gastronômica","Ambiente acolhedor e pratos generosos para compartilhar."]];
  return (
    <section id="diferenciais" className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-5">
      {d.map((x,i) => <div key={i} className="rounded-2xl p-6" style={{background:"var(--card)",border:"1px solid var(--line)"}}>
        <div className="serif text-2xl font-bold" style={{color:"var(--olive)"}}>0{i+1}</div>
        <h3 className="text-xl font-bold mt-2">{x[0]}</h3>
        <p className="mt-2" style={{color:"var(--muted)"}}>{x[1]}</p></div>)}
    </section>
  );
}
