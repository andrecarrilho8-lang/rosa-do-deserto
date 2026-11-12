"use client";

import { useState } from "react";

export default function CopiarPix({ chave }) {
  const [copiado, setCopiado] = useState(false);

  if (!chave) {
    return (
      <div className="pix-caixa vazia">
        <span className="pix-rotulo">Chave Pix</span>
        <span className="pix-valor">a cadastrar</span>
      </div>
    );
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(chave);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2200);
    } catch {
      setCopiado(false);
    }
  }

  return (
    <div className="pix-caixa">
      <div>
        <span className="pix-rotulo">Chave Pix</span>
        <span className="pix-valor">{chave}</span>
      </div>
      <button className="btn btn-cheio" onClick={copiar} type="button">
        {copiado ? "Copiado" : "Copiar"}
      </button>
    </div>
  );
}
