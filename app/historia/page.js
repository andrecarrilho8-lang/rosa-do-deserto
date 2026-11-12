import Link from "next/link";

export const metadata = {
  title: "A história | Projeto Rosa do Deserto",
  description:
    "Como uma saudade, um sonho e uma semente de rosa viraram seiscentas e três músicas.",
};

const capitulos = [
  {
    n: "I",
    titulo: "A mãe",
    texto:
      "Em setembro de 2021 a mãe dele morreu de uma semana para outra. Ele tinha cuidado dela no último ano, lembrando dos remédios, segurando a rotina. Desde novembro daquele ano mora sozinho.",
  },
  {
    n: "II",
    titulo: "A promessa",
    texto:
      "Um ano depois, numa adoração de madrugada, ele perguntou o que ia fazer da vida. Ouviu que Deus traria alguém que ele já conhecia e de quem jamais suspeitaria. Achou que estava viajando e foi dormir.",
  },
  {
    n: "III",
    titulo: "O sonho da rosa",
    texto:
      "Dois dias depois sonhou com a mãe num canteiro de rosas. Ela colheu uma flor e entregou a Nossa Senhora, que veio correndo e pôs a rosa na mão dele. Acordou com aquela rosa na cabeça, uma rosa que nunca tinha visto.",
  },
  {
    n: "IV",
    titulo: "O reencontro",
    texto:
      "Uma semana depois reencontrou no Instagram uma amiga de vinte anos atrás, ex-namorada de um amigo próximo. Ela estava morando fora, recém-separada, depois de perder três filhos antes de eles nascerem.",
  },
  {
    n: "V",
    titulo: "A pergunta no chuveiro",
    texto:
      "Ele não soube o que dizer. Pediu licença, foi tomar banho e começou a orar. E veio a pergunta que o derrubou, porque os médicos tinham mandado abortá-lo para salvar a mãe, e o pai pediu para tentarem salvar os dois.",
  },
  {
    n: "VI",
    titulo: "Saudade",
    texto:
      "Saiu do chuveiro e escreveu a letra inteira de uma vez. Chamou o amigo que faz as melodias. No fim da primeira vez que cantaram, os dois estavam chorando, e a diarista também. Ali ele prometeu a ela vinte músicas.",
  },
  {
    n: "VII",
    titulo: "A semente",
    texto:
      "Quis mandar sementes de rosa para ela, porque flor cortada não aguentaria a viagem. Procurou na internet e o quarto resultado era semente de rosa do deserto. Olhou a foto e era igual à rosa do sonho.",
  },
  {
    n: "VIII",
    titulo: "O caminho da água",
    texto:
      "Depois foi pesquisar o que a planta faz. A rosa do deserto brota na areia e mostra onde tem água. E no deserto, água é vida. Foi aí que ele entendeu o nome e parou de discutir.",
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
            Começou com uma <em>saudade</em>.
          </h1>
          <p className="texto rev d2">
            Ele não planejou nada disso. Diz que antes da Rosa do Deserto tinha
            visto rosa na vida umas três vezes, nunca deu uma flor para ninguém
            e nunca ligou para flor nenhuma.
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
            Todo mundo pergunta. Ele nunca vai dizer, e diz que não faria
            diferença saber, porque a história nunca foi sobre quem ela é.
          </p>
          <p className="fala rev d3" style={{ marginTop: 32 }}>
            &ldquo;Foi só um jeito de Deus me mostrar o conceito.&rdquo;
          </p>
          <p className="texto rev d4" style={{ marginTop: 32 }}>
            Ela ouve todas as músicas antes de qualquer pessoa. É o único
            público garantido que ele tem. Segundo ele, quem tenta cuidar de
            todo mundo acaba não cuidando de ninguém, e quem cuida de uma rosa
            só descobre que o passarinho leva a semente para longe.
          </p>
          <div className="botoes rev d4" style={{ marginTop: 36, justifyContent: "center" }}>
            <Link className="btn btn-cheio" href="/musicas">
              Ouvir as músicas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
