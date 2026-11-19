import { useState } from "react";
import { IMAGES } from "../data/config";

export default function Photo({ k, label, className = "" }) {
  const src = IMAGES[k];
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    return (
      <img src={src} alt={label} loading="lazy" onError={() => setFailed(true)}
        className={"object-cover w-full h-full " + className} />
    );
  }
  return (
    <div role="img" aria-label={"Espaço para foto: " + label}
      className={"w-full h-full flex items-end p-4 " + className}
      style={{ background: "linear-gradient(160deg,#16406B,#0B2545 60%,#56662B)" }}>
      <span className="text-xs text-white/80">Foto: {label}</span>
    </div>
  );
}
