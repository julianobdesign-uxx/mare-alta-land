import Photo from "./Photo";

export default function Hero() {
  return (
    <section className="relative text-white" style={{background:"var(--navy)"}}>
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="fade">
          <p className="text-sm tracking-widest uppercase mb-4" style={{color:"var(--sand)"}}>Cabo Frio · Região dos Lagos</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">O sabor do mar, servido generosamente.</h1>
          <p className="mt-5 text-lg text-white/85 max-w-md">Cozinha costeira contemporânea, com ingredientes frescos e pratos feitos para dividir.</p>
          <a href="#cardapio" className="inline-block mt-8 px-6 py-3.5 rounded-full font-semibold" style={{background:"var(--sand)",color:"#10223A"}}>Conheça nosso cardápio</a>
        </div>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden fade"><Photo k="hero" label="mesa de frutos do mar"/></div>
      </div>
    </section>
  );
}
