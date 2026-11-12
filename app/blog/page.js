import { posts } from "@/lib/dados";

export const metadata = {
  title: "Blog e novidades | Projeto Rosa do Deserto",
  description:
    "Notícias do Projeto Rosa do Deserto: lançamentos, bastidores e apresentações.",
};

export default function Blog() {
  return (
    <>
      <section className="capa">
        <img className="fundo" src="/img/textura-petalas.webp" alt="" />
        <div className="veu" />
        <div className="env">
          <p className="rotulo rev">Blog</p>
          <h1 className="rev d1">
            O que está <em>acontecendo</em>.
          </h1>
          <p className="texto rev d2">
            Lançamento de música, bastidor de gravação, apresentação marcada.
            O que for novidade aparece aqui primeiro.
          </p>
        </div>
      </section>

      <section className="bloco">
        <div className="env">
          <div className="posts">
            {posts.map((p, i) => (
              <article key={p.slug} className={`post rev ${i % 2 ? "d1" : ""}`}>
                <span className="post-data">{p.data}</span>
                <h2>{p.titulo}</h2>
                <p>{p.resumo}</p>
              </article>
            ))}
          </div>

          <div className="nota-admin rev">
            <p>
              Os textos completos passam a abrir em página própria quando a área
              administrativa entrar no ar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
