"use client";

import { useEffect, useState } from "react";

const fotos = [
  { src: "/img/hero-ambar.webp", alt: "Juninho Bergamin apoiado nas muletas, no estúdio" },
  { src: "/img/hero-sentado.webp", alt: "Juninho Bergamin sentado no estúdio" },
  { src: "/img/hero-ensaio.webp", alt: "Juninho Bergamin durante ensaio" },
  { src: "/img/hero-varanda.webp", alt: "Juninho Bergamin na varanda, ao fim da tarde" },
  { src: "/img/hero-bastidores.webp", alt: "Juninho Bergamin nos bastidores" },
  { src: "/img/hero-noite.webp", alt: "Juninho Bergamin à noite" },
];

const INTERVALO = 5200;

export default function HeroFotos() {
  const [atual, setAtual] = useState(0);
  const [parado, setParado] = useState(false);

  useEffect(() => {
    const reduz =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduz) {
      setParado(true);
      return;
    }

    const id = setInterval(() => {
      if (document.hidden) return;
      setAtual((i) => (i + 1) % fotos.length);
    }, INTERVALO);

    return () => clearInterval(id);
  }, []);

  const lista = parado ? [fotos[0]] : fotos;

  return (
    <div className="hero-foto">
      {lista.map((f, i) => (
        <img
          key={f.src}
          src={f.src}
          alt={i === 0 ? f.alt : ""}
          aria-hidden={i === 0 ? undefined : true}
          className={i === atual ? "hero-img ativa" : "hero-img"}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
        />
      ))}
      {!parado ? (
        <div className="hero-pontos" role="presentation">
          {fotos.map((f, i) => (
            <button
              key={f.src}
              type="button"
              className={i === atual ? "ponto aceso" : "ponto"}
              aria-label={`Foto ${i + 1} de ${fotos.length}`}
              onClick={() => setAtual(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
