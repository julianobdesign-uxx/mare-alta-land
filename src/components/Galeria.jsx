import Photo from "./Photo";

export default function Galeria() {
  const g = [["moqueca","moqueca em panela de barro"],["peixe","peixe grelhado com acompanhamentos"],["moranga","camarão na moranga"],["lula","lula à dorê"],["mesa","mesa de frutos do mar"]];
  return (
    <section id="galeria" className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-3xl md:text-4xl font-bold">Galeria</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
        {g.map((x,i) => <div key={x[0]} className={"rounded-xl overflow-hidden "+(i===0?"col-span-2 aspect-[2/1]":"aspect-square")}><Photo k={x[0]} label={x[1]}/></div>)}
      </div>
    </section>
  );
}
