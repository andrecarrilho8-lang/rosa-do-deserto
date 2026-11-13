"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Mede o progresso de cada elemento marcado com data-cena conforme a página
 * rola e expõe esse valor como a variável CSS --p, de 0 a 1. O CSS usa --p
 * para escalar, deslocar e revelar. Nada anima fora da tela.
 */
export default function Palco() {
  const caminho = usePathname();

  useEffect(() => {
    const alvos = Array.from(document.querySelectorAll("[data-cena]"));
    if (!alvos.length) return;

    const reduz =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduz) {
      alvos.forEach((el) => el.style.setProperty("--p", "1"));
      return;
    }

    let pedido = null;

    const medir = () => {
      pedido = null;
      const alturaTela = window.innerHeight;
      for (const el of alvos) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > alturaTela + 200) continue;
        const bruto = (alturaTela - r.top) / (alturaTela * 0.75 + r.height * 0.25);
        const p = Math.max(0, Math.min(1, bruto));
        el.style.setProperty("--p", p.toFixed(3));
      }
    };

    const aoRolar = () => {
      if (pedido === null) pedido = window.requestAnimationFrame(medir);
    };

    medir();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);

    return () => {
      if (pedido !== null) window.cancelAnimationFrame(pedido);
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
    };
  }, [caminho]);

  return null;
}
