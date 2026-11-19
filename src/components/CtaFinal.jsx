import { wa } from "../lib/utils";

export default function CtaFinal() {
  return (
    <section className="text-center text-white px-4 py-16" style={{background:"var(--navy)"}}>
      <h2 className="text-3xl md:text-4xl font-bold">Pedidos e reservas pelo WhatsApp</h2>
      <p className="mt-3 text-white/80">Fale com a gente e garanta sua mesa em Cabo Frio.</p>
      <a href={wa("Olá! Gostaria de fazer uma reserva na Maré Alta.")} className="inline-block mt-7 px-7 py-3.5 rounded-full font-semibold" style={{background:"var(--sand)",color:"#10223A"}}>Reservar pelo WhatsApp</a>
    </section>
  );
}
