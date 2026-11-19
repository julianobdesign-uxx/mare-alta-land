export const MENU = {
  Entradas: [
    { id:"e1", nome:"Casquinha de siri", desc:"Siri desfiado, temperos frescos e gratinado na casquinha.", preco:null },
    { id:"e2", nome:"Bolinho de bacalhau", desc:"Crocante por fora, macio por dentro, com molho da casa.", preco:null },
    { id:"e3", nome:"Lula à dorê", desc:"Anéis de lula empanados e dourados, com limão.", preco:null, foto:"lula" },
    { id:"e4", nome:"Camarão ao alho e óleo", desc:"Camarões salteados com alho dourado e azeite.", preco:null },
  ],
  Principais: [
    { id:"p1", nome:"Moqueca de peixe", desc:"Peixe fresco, leite de coco, dendê e coentro, servida na panela de barro.", preco:null, foto:"moqueca", destaque:true },
    { id:"p2", nome:"Bobó de camarão", desc:"Creme de aipim com camarões, dendê e leite de coco.", preco:null },
    { id:"p3", nome:"Camarão na moranga", desc:"Camarões cremosos servidos dentro da moranga assada.", preco:null, foto:"moranga", destaque:true },
    { id:"p4", nome:"Caldeirada de frutos do mar", desc:"Peixe, camarão, lula e mariscos em caldo aromático.", preco:null },
    { id:"p5", nome:"Peixe fresco grelhado", desc:"Acompanha arroz, pirão e farofa.", preco:null, foto:"peixe", destaque:true },
    { id:"p6", nome:"Bacalhau com natas", desc:"Lascas de bacalhau, batatas e creme gratinado.", preco:null },
  ],
  Acompanhamentos: [
    { id:"a1", nome:"Arroz branco", desc:"Soltinho, na medida certa.", preco:null },
    { id:"a2", nome:"Pirão de peixe", desc:"Cremoso, feito com caldo do peixe.", preco:null },
    { id:"a3", nome:"Farofa de dendê", desc:"Crocante, com toque de dendê.", preco:null },
    { id:"a4", nome:"Batatas rústicas", desc:"Assadas com ervas e sal grosso.", preco:null },
  ],
  Bebidas: [
    { id:"b1", nome:"Caipirinha de limão", desc:"Clássica, com limão-taiti.", preco:null },
    { id:"b2", nome:"Caipirinha de frutas tropicais", desc:"Fruta da estação, gelo e açúcar.", preco:null },
    { id:"b3", nome:"Sucos naturais", desc:"Sabores do dia.", preco:null },
    { id:"b4", nome:"Refrigerantes", desc:"Opções geladas.", preco:null },
  ],
  Sobremesas: [
    { id:"s1", nome:"Pudim artesanal", desc:"Calda de caramelo e textura cremosa.", preco:null },
    { id:"s2", nome:"Cocada cremosa", desc:"Coco fresco e leite condensado.", preco:null },
    { id:"s3", nome:"Doce de banana", desc:"Banana em calda com toque de canela.", preco:null },
  ],
};
export const ALL = Object.values(MENU).flat();
