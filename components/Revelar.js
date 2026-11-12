"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Revelar() {
  const caminho = usePathname();

  useEffect(() => {
    const alvos = Array.from(document.querySelectorAll(".rev"));
    if (!alvos.length) return;

    const reduz =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduz) {
      alvos.forEach((el) => el.classList.add("in"));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("in");
          observador.unobserve(e.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );

    alvos.forEach((el) => observador.observe(el));

    // rede de segurança: nada fica invisível se o observador falhar
    const t = setTimeout(() => {
      alvos.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
      });
    }, 2000);

    return () => {
      clearTimeout(t);
      observador.disconnect();
    };
  }, [caminho]);

  return null;
}
