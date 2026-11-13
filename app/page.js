import Link from "next/link";
import { Vela } from "@/components/Atmosfera";
import { posts, ep } from "@/lib/dados";

export default function Home() {
  return (
    <>
      {/* ---------- apresentação ---------- */}
      <header className="hero">
        <div className="hero-foto">
          <img
            src="/img/hero-ambar.webp"
            alt="Juninho Bergamin apoiado nas muletas, no estúdio"
          />
        </div>
        <div className="hero-veu" />
        <Vela />
        <div className="env hero-dentro">
          <div className="hero-conteudo">
            <img className="selo rev" src="/img/rosa-traco.svg" alt="" />
            <p className="rotulo rev">Projeto Rosa do Deserto</p>
            <h1 className="rev d1">
              Antes de cada canção,
              <br />
              <em>o testemunho de onde ela veio.</em>
            </h1>
            <p className="texto rev d2 hero-lead">
              O Projeto Rosa do Deserto é o trabalho de Juninho Bergamin, cantor
              e compositor católico de Londrina. Em dois anos e meio ele compôs
              seiscentas e três músicas, quase todas de madrugada, dentro de um
              apartamento de trinta metros quadrados de onde quase nunca
              consegue sair por causa de uma limitação na perna.
            </p>
            <p className="texto rev d2 hero-lead">
              Ele canta e, entre uma música e outra, conta o que aconteceu com
              ele para aquela letra existir. É assim no palco e é assim no DVD
              que acabou de gravar.
            </p>

            <div className="botoes rev d3">
              <a className="btn btn-cheio" href="#musicas">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
                Ouvir Saudade
              </a>
              <Link className="btn btn-vazio" href="/historia">
                Por que Rosa do Deserto
              </Link>
            </div>

            <ul className="ficha rev d4">
              <li>
                <b>603</b>
                <span>músicas compostas em dois anos e meio</span>
              </li>
              <li>
                <b>EP</b>
                <span>Rosa do Deserto, nas plataformas desde {ep.lancamento}</span>
              </li>
              <li>
                <b>DVD</b>
                <span>O Casamento, a Rosa e a Pedra, já gravado</span>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* ---------- novidades ---------- */}
      <section className="bloco-curto novidades">
        <div className="env">
          <div className="nov-topo">
            <h2>Novidades</h2>
            <Link href="/blog">Ver tudo</Link>
          </div>
          <div className="nov-grade">
            {posts.slice(0, 3).map((p, i) => (
              <Link key={p.slug} className={`nov rev d${i}`} href="/blog">
                <span className="quando">{p.data}</span>
                <span className="tit">{p.titulo}</span>
                <span className="resumo">{p.resumo}</span>
              </Link>
            ))}
          </div>
          <p className="nov-ponte rev d3">
            As três novidades vêm do mesmo lugar: uma amiga que perdeu três
            filhos antes de eles nascerem, e uma promessa de vinte músicas que
            ele fez para ela.
          </p>
        </div>
      </section>

      {/* ---------- história ---------- */}
      <section className="bloco historia-sec">
        <div className="env">
          <div className="historia-grade">
            <div>
              <p className="rotulo rev">A história</p>
              <h2 className="titulo rev d1" style={{ maxWidth: "16ch" }}>
                O nome veio de <em>um sonho</em>.
              </h2>
              <p className="texto rev d2" style={{ marginTop: 22 }}>
                A mãe dele morreu em setembro de 2021, de uma semana para outra.
                Um ano depois ele sonhou com ela num canteiro de rosas,
                entregando uma flor que ele nunca tinha visto. Na semana
                seguinte reencontrou uma amiga de vinte anos atrás, morando
                fora, recém-separada, depois de perder três filhos antes de eles
                nascerem.
              </p>
              <p className="texto rev d2">
                Ele quis mandar sementes de rosa para ela, porque flor cortada
                não aguentaria a viagem. Procurou na internet e o quarto
                resultado era semente de rosa do deserto, idêntica à flor do
                sonho. Depois foi pesquisar o que a planta faz: ela brota na
                areia e mostra onde tem água.
              </p>
              <p className="texto rev d3">
                Ele prometeu vinte músicas para aquela amiga. Já são seiscentas
                e três, e ela continua ouvindo cada uma antes de todo mundo.
              </p>
              <div className="botoes rev d3" style={{ marginTop: 30 }}>
                <Link className="btn btn-vazio" href="/historia">
                  A história inteira
                </Link>
              </div>
            </div>
            <div className="rev d1">
              <img
                className="historia-foto"
                src="/img/retrato-estudio.webp"
                alt="Retrato de Juninho Bergamin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- agenda ---------- */}
      <section className="bloco agenda-home">
        <img className="agenda-fundo" src="/img/palco.webp" alt="" aria-hidden="true" />
        <div className="agenda-veu" />
        <div className="env">
          <div className="agenda-home-conteudo">
            <p className="rotulo rev">Agenda e convites</p>
            <h2 className="titulo rev d1" style={{ maxWidth: "15ch" }}>
              Ele vai. <em>Só precisa chegar.</em>
            </h2>
            <p className="texto rev d2" style={{ marginTop: 22 }}>
              Paróquia, retiro, encontro ou grupo de oração, em qualquer lugar
              do Brasil, inclusive de avião. A apresentação alterna canção,
              testemunho e oração, e dura o tempo que o seu encontro pedir.
            </p>
            <p className="texto rev d2">
              Juninho anda de muletas e não entra em carro comum. O transporte
              adaptado em Londrina custa cerca de duzentos reais por viagem, e
              por isso quem convida cuida do deslocamento. Dizer isso aqui,
              antes de qualquer conversa, poupa constrangimento dos dois lados.
            </p>
            <div className="botoes rev d3" style={{ marginTop: 30 }}>
              <Link className="btn btn-vazio" href="/agenda">
                O que ele precisa no local
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- músicas ---------- */}
      <section className="bloco musicas-home" id="musicas">
        <div className="env">
          <p className="rotulo rev">Músicas</p>
          <h2 className="titulo rev d1" style={{ maxWidth: "18ch" }}>
            Comece por <em>Saudade</em>, que foi a primeira.
          </h2>
          <div className="musicas-home-grade">
            <div>
              <p className="texto rev d2" style={{ marginTop: 22 }}>
                Quando a amiga contou das três perdas, ele não soube o que
                responder. Foi tomar banho e lembrou de uma coisa que a mãe
                contava: os médicos mandaram abortá-lo para que ela
                sobrevivesse, e o pai pediu para tentarem salvar os dois.
              </p>
              <p className="fala rev d3" style={{ marginTop: 28 }}>
                &ldquo;Qual é a sua diferença para as crianças dela?&rdquo;
              </p>
              <p className="fala-quem rev d3">O que ele ouviu no chuveiro</p>
              <p className="texto rev d3" style={{ marginTop: 28 }}>
                Saiu do banho e escreveu a letra inteira de uma vez. Cantou
                naquela noite para o amigo de Recife que faz as melodias, e os
                dois choraram. Essa é a música que está tocando aqui ao lado.
              </p>
              <div className="botoes rev d4" style={{ marginTop: 30 }}>
                <Link className="btn btn-cheio" href="/musicas">
                  Todas as músicas
                </Link>
              </div>
            </div>
            <div className="rev d2">
              <div className="player">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/bVfFE7b9ybc?rel=0"
                  title="Saudade, de Juninho Bergamin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- DVD ---------- */}
      <section className="bloco dvd-sec">
        <Vela />
        <div className="env">
          <div className="dvd-grade">
            <div className="rev">
              <div className="cartaz">
                <img
                  src="/img/cartaz-dvd.webp"
                  alt="Cartaz do DVD O Casamento, a Rosa e a Pedra"
                />
              </div>
            </div>
            <div>
              <p className="rotulo rev">O DVD</p>
              <h2 className="titulo rev d1" style={{ maxWidth: "15ch" }}>
                O Casamento, a Rosa e <em>a Pedra</em>
              </h2>
              <p className="texto rev d2" style={{ marginTop: 22 }}>
                Seis músicas, cada uma com o testemunho antes. Ele pediu
                patrocínio para quase quinhentas pessoas e recebeu cinquenta
                copos de brinde. Negociou um orçamento de vinte mil reais para
                quatro mil, fez uma rifa e vendeu metade. Gravou devendo.
              </p>
              <p className="texto rev d2">
                Trinta pessoas foram assistir. Ele conta que ninguém saiu sem
                chorar. O nome do DVD tem explicação, e ela envolve os cinquenta
                copos.
              </p>
              <div className="botoes rev d3" style={{ marginTop: 28 }}>
                <Link className="btn btn-vazio" href="/dvd">
                  Por que casamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- contribua ---------- */}
      <section className="bloco-curto contribua-home">
        <div className="env">
          <div className="contribua-home-grade">
            <div className="rev">
              <h2 className="titulo" style={{ maxWidth: "17ch" }}>
                Ainda faltam músicas para gravar.
              </h2>
            </div>
            <div className="rev d1">
              <p className="texto">
                São seiscentas e três compostas e seis gravadas. Cada
                contribuição vira estúdio, divulgação e passagem, que é o que
                falta para as outras saírem do caderno. Dá para ajudar por Pix,
                em qualquer valor.
              </p>
              <div className="botoes" style={{ marginTop: 26 }}>
                <Link className="btn btn-cheio" href="/contribua">
                  Como contribuir
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
