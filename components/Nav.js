"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const paginas = [
  { href: "/historia", nome: "História" },
  { href: "/musicas", nome: "Músicas" },
  { href: "/dvd", nome: "O DVD" },
  { href: "/agenda", nome: "Agenda" },
  { href: "/blog", nome: "Blog" },
  { href: "/contato", nome: "Contato" },
];

export default function Nav() {
  const [preso, setPreso] = useState(false);
  const [aberto, setAberto] = useState(false);
  const caminho = usePathname();

  useEffect(() => {
    const aoRolar = () => setPreso(window.scrollY > 40);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    setAberto(false);
  }, [caminho]);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <>
      <nav className={preso ? "nav preso" : "nav"}>
        <Link className="marca" href="/">
          <img src="/img/simbolo.svg" alt="" />
          <b>Rosa do Deserto</b>
        </Link>

        <ul className="links">
          {paginas.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className={caminho.startsWith(p.href) ? "ativo" : undefined}
              >
                {p.nome}
              </Link>
            </li>
          ))}
        </ul>

        <Link className="apoiar" href="/contribua">
          Contribua
        </Link>

        <button
          className={aberto ? "hamburguer aberto" : "hamburguer"}
          onClick={() => setAberto((v) => !v)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={aberto ? "gaveta aberta" : "gaveta"}>
        <ul>
          {paginas.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className={caminho.startsWith(p.href) ? "ativo" : undefined}
              >
                {p.nome}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contribua"
              className={caminho.startsWith("/contribua") ? "ativo" : undefined}
            >
              Contribua
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
