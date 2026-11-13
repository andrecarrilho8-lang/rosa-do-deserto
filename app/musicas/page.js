import Link from "next/link";
import { musicas, ep } from "@/lib/dados";

export const metadata = {
  title: "Músicas | Projeto Rosa do Deserto",
  description:
    "As canções de Juninho Bergamin, cada uma com o testemunho que deu origem à letra.",
};

export default function Musicas() {
  const [destaque, ...demais] = musicas;

  return (
    <>
      {/* ---------- capa ---------- */}
      <section className="capa capa-musicas">
        <img className="fundo" src="/img/cantando.webp" alt="" />
        <div className="veu" />
        <div className="env">
          <p className="rotulo rev">Músicas</p>
          <h1 className="rev d1">
            Primeiro o testemunho. <em>Depois a canção.</em>
          </h1>
          <p className="texto rev d2">
            São seiscentas e três canções compostas e seis gravadas. Estas podem
            ser ouvidas agora.
          </p>
        </div>
      </section>

      {/* ---------- faixa em destaque ---------- */}
      <section className="destaque">
        <div className="destaque-palco" data-cena>
          <span className="destaque-n" aria-hidden="true">
            01
          </span>
          <div className="env">
            <div className="quadro">
              <div className="player">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${destaque.youtube}?rel=0`}
                  title={`${destaque.nome}, de Juninho Bergamin`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="env">
          <div className="destaque-texto">
            <div className="destaque-coluna">
              <p className="rotulo rev">A primeira do projeto</p>
              <h2 className="destaque-titulo rev d1">{destaque.nome}</h2>
            </div>
            <div className="destaque-coluna">
              <p className="texto rev d2">{destaque.testemunho}</p>
              <blockquote className="trecho rev d3">
                &ldquo;{destaque.trecho}&rdquo;
                <cite>Trecho da letra</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- marquise ---------- */}
      <div className="marquise" aria-hidden="true">
        <div className="marquise-fita">
          {[0, 1].map((v) => (
            <span key={v}>
              {musicas.map((m) => (
                <em key={m.slug}>{m.nome}</em>
              ))}
              {ep.faixas
                .filter((f) => !musicas.some((m) => m.nome === f))
                .map((f) => (
                  <em key={f}>{f}</em>
                ))}
            </span>
          ))}
        </div>
      </div>

      {/* ---------- demais faixas ---------- */}
      <section className="bloco faixas-sec">
        <div className="env">
          {demais.map((m, i) => (
            <article
              key={m.slug}
              className={i % 2 ? "faixa-cena invertida" : "faixa-cena"}
              data-cena
            >
              <span className="faixa-n" aria-hidden="true">
                {String(i + 2).padStart(2, "0")}
              </span>
              <div className="faixa-video">
                <div className="quadro">
                  <div className="player">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${m.youtube}?rel=0`}
                      title={`${m.nome}, de Juninho Bergamin`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="faixa-info">
                <h2>{m.nome}</h2>
                <p className="faixa-resumo">{m.resumo}</p>
                {m.testemunho ? (
                  <p className="texto">{m.testemunho}</p>
                ) : (
                  <p className="aguardando">
                    O testemunho desta canção será publicado em breve.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- EP e nota ---------- */}
      <section className="bloco-curto ep-sec">
        <div className="env">
          <div className="ep rev">
            <h3>O EP {ep.titulo}</h3>
            <p>
              Está nas plataformas desde {ep.lancamento}, com {ep.faixas.length}{" "}
              faixas: {ep.faixas.join(", ")}.
            </p>
          </div>
          <div className="nota-letras rev">
            <p>
              As letras completas serão publicadas aqui junto com o testemunho de
              cada canção. São longas por opção: Juninho defende que música de
              duas ou três frases repetidas leva só à emoção, e que emoção sem
              reflexão não muda ninguém.
            </p>
          </div>
          <div className="botoes rev" style={{ marginTop: 34 }}>
            <Link className="btn btn-vazio" href="/dvd">
              Conheça o DVD
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
