import Link from "next/link";

export const metadata = {
  title: "Minha história | Projeto Rosa do Deserto",
  description:
    "Como uma saudade, um sonho e uma semente de rosa viraram seiscentas e três músicas.",
};

const capitulos = [
  {
    n: "I",
    titulo: "Minha mãe",
    texto:
      "Ela morreu em setembro de 2021, de uma semana para outra. No último ano eu era quem cuidava dela, lembrava dos remédios, segurava a rotina. Desde novembro daquele ano eu moro sozinho.",
  },
  {
    n: "II",
    titulo: "A promessa",
    texto:
      "Um ano depois, numa adoração de madrugada, perguntei o que eu ia fazer da minha vida. Ouvi que Deus traria alguém que eu já conhecia e de quem eu jamais desconfiaria. Achei que estava viajando e fui dormir.",
  },
  {
    n: "III",
    titulo: "O sonho da rosa",
    texto:
      "Dois dias depois sonhei com a minha mãe num canteiro de rosas. Ela colheu uma flor, entregou a Nossa Senhora, e Nossa Senhora veio correndo e pôs a rosa na minha mão. Acordei com aquela flor na cabeça, uma flor que eu nunca tinha visto.",
  },
  {
    n: "IV",
    titulo: "O reencontro",
    texto:
      "Uma semana depois reencontrei no Instagram uma amiga de vinte anos atrás, ex-namorada de um amigo meu. Ela estava morando fora, recém-separada, depois de perder três filhos antes de eles nascerem.",
  },
  {
    n: "V",
    titulo: "A pergunta no chuveiro",
    texto:
      "Eu não soube o que dizer para ela. Pedi licença, fui tomar banho e comecei a orar. Foi ali que veio a pergunta que me derrubou, porque os médicos tinham mandado abortar para salvar a vida da minha mãe, e meu pai pediu para tentarem salvar os dois.",
  },
  {
    n: "VI",
    titulo: "Saudade",
    texto:
      "Saí do chuveiro e escrevi a letra inteira de uma vez. Chamei o amigo que faz as melodias comigo. Quando terminamos de cantar pela primeira vez, nós dois estávamos chorando, e a diarista também. Ali eu prometi vinte músicas para ela.",
  },
  {
    n: "VII",
    titulo: "A semente",
    texto:
      "Quis mandar sementes de rosa, porque flor cortada não aguentaria a viagem até lá. Procurei na internet e o quarto resultado era semente de rosa do deserto. Abri a foto e era igualzinha à flor do sonho.",
  },
  {
    n: "VIII",
    titulo: "O caminho da água",
    texto:
      "Depois fui pesquisar o que a planta faz. A rosa do deserto nasce na areia e mostra onde tem água. E no deserto, água é vida. Foi aí que eu entendi o nome e parei de discutir.",
  },
];

export default function Historia() {
  return (
    <>
      <section className="capa">
        <img className="fundo" src="/img/pb.webp" alt="" />
        <div className="veu" />
        <div className="env">
          <p className="rotulo rev">Minha história</p>
          <h1 className="rev d1">
            Começou com uma <em>saudade</em>.
          </h1>
          <p className="texto rev d2">
            Eu não planejei nada disso. Antes da Rosa do Deserto eu devia ter
            visto rosa na vida umas três vezes, nunca tinha dado uma flor para
            ninguém e não ligava para flor nenhuma.
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
            Todo mundo me pergunta. Eu não vou dizer, e saber não mudaria nada,
            porque a história nunca foi sobre quem ela é.
          </p>
          <p className="fala rev d3" style={{ marginTop: 32 }}>
            &ldquo;Foi só um jeito de Deus me mostrar o conceito.&rdquo;
          </p>
          <p className="texto rev d4" style={{ marginTop: 32 }}>
            Ela ouve todas as músicas antes de qualquer pessoa. Eu acho que quem
            tenta cuidar de todo mundo acaba não cuidando de ninguém, e que quem
            cuida de uma rosa só descobre depois que o passarinho leva a semente
            para longe.
          </p>
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
