import { CONFIG } from "../data/config";

export default function Footer() {
  return <footer className="px-4 py-8 text-sm text-center" style={{color:"var(--muted)"}}>
    <p>{CONFIG.nome} · {CONFIG.endereco} · {CONFIG.telefone} · Instagram {CONFIG.instagram}</p>
    <p className="mt-1">Restaurante fictício para fins de demonstração.</p></footer>;
}
