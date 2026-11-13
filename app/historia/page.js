import Link from "next/link";

export const metadata = {
  title: "A história | Projeto Rosa do Deserto",
  description:
    "A origem do Projeto Rosa do Deserto: um luto, um sonho, uma semente e as seiscentas e três canções de Juninho Bergamin.",
};

const capitulos = [
  {
    n: "I",
    titulo: "A perda",
    texto:
      "A mãe de Juninho morreu em setembro de 2021, de uma semana para outra. No último ano de vida dela, era ele quem cuidava da rotina e dos remédios. Desde novembro daquele ano mora sozinho.",
  },
  {
    n: "II",
    titulo: "A promessa",
    texto:
      "Um ano depois, numa adoração de madrugada, ele perguntou o que faria da vida. Conta ter ouvido que Deus traria à sua vida alguém que ele já conhecia e de quem jamais desconfiaria.",
  },
  {
    n: "III",
    titulo: "O sonho da rosa",
    texto:
      "Dois dias depois sonhou com a mãe num canteiro de rosas. Ela colheu uma flor e entregou a Nossa Senhora, que a colocou na mão dele. Era uma flor que ele nunca tinha visto.",
  },
  {
    n: "IV",
    titulo: "O reencontro",
    texto:
      "Na semana seguinte reencontrou pelas redes uma amiga de vinte anos atrás, ex-namorada de um amigo próximo. Ela morava fora, estava recém-separada e havia perdido três filhos antes de eles nascerem.",
  },
  {
    n: "V",
    titulo: "A pergunta",
    texto:
      "Sem saber o que responder a ela, foi orar. Lembrou então de um episódio da própria família: os médicos indicaram o aborto para salvar a vida da mãe dele, e o pai pediu que tentassem salvar os dois.",
    fala: "Qual é a sua diferença para as crianças dela?",
  },
  {
    n: "VI",
    titulo: "Saudade",
    texto:
      "A letra saiu inteira de uma vez. Ele chamou o parceiro de Recife que faz as melodias e, na primeira vez que cantaram, os dois choraram. Ali prometeu vinte canções para aquela amiga.",
  },
  {
    n: "VII",
    titulo: "A semente",
    texto:
      "Quis enviar sementes de rosa, porque flor cortada não resistiria à viagem. Ao procurar na internet, o quarto resultado era semente de rosa do deserto. A foto era igual à flor do sonho.",
  },
  {
    n: "VIII",
    titulo: "O caminho da água",
    texto:
      "Depois veio a descoberta que deu nome ao projeto: a rosa do deserto nasce na areia e indica onde há água. No deserto, água é vida. As vinte canções prometidas hoje são seiscentas e três.",
  },
];

export default function Historia() {
  return (
    <>
      <section className="capa">
        <img className="fundo" src="/img/pb.webp" alt="" />
        <div className="veu" />
        <div className="env">
          <p className="rotulo rev">A história</p>
          <h1 className="rev d1">
            Como o projeto <em>começou</em>
          </h1>
          <p className="texto rev d2">
            Nada disso foi planejado. Antes da Rosa do Deserto, Juninho diz que
            tinha visto rosa na vida umas três vezes e que nunca havia dado uma
            flor a ninguém.
          </p>
        </div>
      </section>

      <section className="bloco">
        <div className="env">
          <div className="linha-tempo">
            {capitulos.map((c, i) => (
              <article key={c.n} className={`etapa rev ${i % 2 ? "d1" : ""}`}>
                <span className="etapa-n">{c.n}</span>
                <div>
                  <h3>{c.titulo}</h3>
                  <p>{c.texto}</p>
                  {c.fala ? (
                    <blockquote className="etapa-fala">
                      &ldquo;{c.fala}&rdquo;
                      <cite>Juninho Bergamin</cite>
                    </blockquote>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bloco misterio">
        <div className="env">
          <img className="misterio-rosa rev" src="/img/rosa-traco.svg" alt="" />
          <h2 className="titulo rev d1">
            Quem é a <em>Rosa do Deserto</em>?
          </h2>
          <p className="texto rev d2">
            A identidade da amiga que deu origem ao projeto nunca foi revelada,
            e não será. Ela ouve cada canção antes do público.
          </p>
          <p className="fala rev d3" style={{ marginTop: 32 }}>
            &ldquo;Foi só um jeito de Deus me mostrar o conceito.&rdquo;
          </p>
          <p className="fala-quem rev d3">Juninho Bergamin</p>
          <div
            className="botoes rev d4"
            style={{ marginTop: 36, justifyContent: "center" }}
          >
            <Link className="btn btn-cheio" href="/musicas">
              Ouvir as músicas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
