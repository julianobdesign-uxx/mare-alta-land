import { useState, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Diferenciais from "./components/Diferenciais";
import Menu from "./components/Menu";
import Destaques from "./components/Destaques";
import Galeria from "./components/Galeria";
import Depoimentos from "./components/Depoimentos";
import Local from "./components/Local";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { wa } from "./lib/utils";

export default function App() {
  const [cart, setCart] = useState({});
  const [open, setOpen] = useState(false);
  const add = id => { setCart(c => ({...c,[id]:(c[id]||0)+1})); setOpen(true); };
  const count = useMemo(() => Object.values(cart).reduce((a,b)=>a+b,0), [cart]);
  return <>
    <Header count={count} open={()=>setOpen(true)}/>
    <main><Hero/><Diferenciais/><Menu add={add}/><Destaques add={add}/><Galeria/><Depoimentos/><Local/><CtaFinal/></main>
    <Footer/>
    <a href={wa("Olá! Vim pelo site da Maré Alta.")} aria-label="Falar pelo WhatsApp" className="fixed right-4 z-40 px-5 py-3.5 rounded-full font-semibold text-white shadow-lg" style={{background:"#1F7A4D",bottom:"calc(16px + env(safe-area-inset-bottom,0px))"}}>WhatsApp</a>
    <Cart cart={cart} setCart={setCart} close={()=>setOpen(false)} openState={open}/>
  </>;
}
