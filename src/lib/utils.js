import { CONFIG } from "../data/config";

export const brl = (p) =>
  p == null ? "Preço a definir" : p.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const wa = (txt) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(txt)}`;
