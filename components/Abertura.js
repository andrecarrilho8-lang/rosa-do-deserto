"use client";

import { useEffect, useState } from "react";

export default function Abertura() {
  const [fase, setFase] = useState("inicio");

  useEffect(() => {
    let jaViu = false;
    try {
      jaViu = sessionStorage.getItem("rdd-abertura") === "1";
    } catch {}

    const reduz =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (jaViu || reduz) {
      setFase("fim");
      return;
    }

    document.body.classList.add("travado");

    const sai = setTimeout(() => setFase("saindo"), 2250);
    const acaba = setTimeout(() => {
      setFase("fim");
      document.body.classList.remove("travado");
      try {
        sessionStorage.setItem("rdd-abertura", "1");
      } catch {}
    }, 3150);

    return () => {
      clearTimeout(sai);
      clearTimeout(acaba);
      document.body.classList.remove("travado");
    };
  }, []);

  if (fase === "fim") return null;

  return (
    <div
      className={fase === "saindo" ? "abertura saindo" : "abertura"}
      aria-hidden="true"
    >
      <div className="abertura-luz" />
      <div className="abertura-marca">
        <img className="abertura-rosa" src="/img/rosa-traco.svg" alt="" />
        <span className="abertura-risco" />
        <img className="abertura-assin" src="/img/assinatura.svg" alt="" />
      </div>
    </div>
  );
}
