import { musicas, ep } from "@/lib/dados";

export const metadata = {
  title: "Músicas | Projeto Rosa do Deserto",
  description:
    "As canções de Juninho Bergamin, cada uma com o testemunho de como nasceu.",
};

export default function Musicas() {
  return (
    <>
      <section className="capa">
        <img className="fundo" src="/img/cantando.webp" alt="" />
        <div className="veu" />
        <div className="env">
          <p className="rotulo rev">Músicas</p>
          <h1 className="rev d1">
            Primeiro o testemunho. <em>Depois a canção.</em>
          </h1>
          <p className="texto rev d2">
            São seiscentas e três músicas e contando. Seis já foram gravadas e
            estas aqui você pode ouvir agora.
          </p>
        </div>
      </section>

      <section className="bloco">
        <div className="env">
          <div className="musicas-lista">
            {musicas.map((m, i) => (
              <article key={m.slug} className="musica rev">
                <div className="musica-video">
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
                <div className="musica-texto">
                  <span className="musica-n">{String(i + 1).padStart(2, "0")}</span>
                  <h2>{m.nome}</h2>
                  <p className="musica-resumo">{m.resumo}</p>
                  {m.testemunho ? (
                    <p className="texto" style={{ marginTop: 16 }}>
                      {m.testemunho}
                    </p>
                  ) : (
                    <p className="aguardando">
                      O testemunho desta música entra aqui assim que ele contar.
                    </p>
                  )}
                  {m.trecho ? (
                    <blockquote className="trecho">
                      &ldquo;{m.trecho}&rdquo;
                    </blockquote>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="ep rev">
            <h3>O EP {ep.titulo}</h3>
            <p>
              Está nas plataformas desde {ep.lancamento}, com {ep.faixas.length}{" "}
              faixas: {ep.faixas.join(", ")}.
            </p>
          </div>

          <div className="nota-letras rev">
            <p>
              As letras completas entram aqui junto com o testemunho de cada
              canção. Elas são longas de propósito. Ele diz que música de duas ou
              três frases repetidas leva só emoção, e que emoção sem reflexão não
              muda ninguém.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
