import { ALL } from "../data/menu";
import { wa } from "../lib/utils";

export default function Cart({ cart, setCart, close, openState }) {
  const lines = Object.entries(cart).map(([id,q]) => ({ it: ALL.find(i => i.id===id), q }));
  const change = (id,d) => setCart(c => { const n={...c}; n[id]=(n[id]||0)+d; if(n[id]<=0) delete n[id]; return n; });
  const msg = "Olá! Gostaria de fazer um pedido na Maré Alta:\n" + lines.map(l => `• ${l.q}x ${l.it.nome}`).join("\n");
  if (!openState) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Seu pedido">
      <div className="absolute inset-0 bg-black/50" onClick={close}></div>
      <div className="relative w-full max-w-md h-full flex flex-col p-5" style={{background:"var(--bg)"}}>
        <div className="flex justify-between items-center"><h2 className="text-2xl font-bold">Seu pedido</h2><button onClick={close} className="px-3 py-2" aria-label="Fechar pedido">Fechar</button></div>
        <div className="flex-1 overflow-y-auto mt-4 space-y-3">
          {lines.length===0 && <p style={{color:"var(--muted)"}}>Nenhum item ainda. Adicione pratos pelo cardápio.</p>}
          {lines.map(l => <div key={l.it.id} className="flex items-center justify-between rounded-xl p-3" style={{background:"var(--card)",border:"1px solid var(--line)"}}>
            <span className="font-medium">{l.it.nome}</span>
            <span className="flex items-center gap-2">
              <button onClick={()=>change(l.it.id,-1)} className="w-10 h-10 rounded-full" style={{border:"1px solid var(--line)"}} aria-label={"Remover um "+l.it.nome}>−</button>
              <span aria-live="polite">{l.q}</span>
              <button onClick={()=>change(l.it.id,1)} className="w-10 h-10 rounded-full" style={{border:"1px solid var(--line)"}} aria-label={"Adicionar um "+l.it.nome}>+</button>
            </span></div>)}
        </div>
        {lines.length>0 && <a href={wa(msg)} className="mt-4 text-center px-6 py-3.5 rounded-full font-semibold text-white" style={{background:"var(--olive)"}}>Enviar pedido pelo WhatsApp</a>}
      </div>
    </div>
  );
}
