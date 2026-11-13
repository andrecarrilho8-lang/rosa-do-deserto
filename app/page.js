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
            <p className="rotulo rev">
              Juninho Bergamin · Cantor e compositor católico · Londrina, PR
            </p>
            <h1 className="rev d1">
              Prometi vinte músicas para uma amiga.
              <br />
              <em>Já são seiscentas e três.</em>
            </h1>
            <p className="texto rev d2 hero-lead">
              Componho quase sempre de madrugada, dentro de casa, porque uma
              limitação na perna me impede de sair sem carro adaptado. Quando
              canto, conto antes o que aconteceu comigo para aquela letra
              existir. É assim no palco e é assim no DVD que gravei.
            </p>

            <div className="botoes rev d3">
              <Link className="btn btn-cheio" href="/agenda">
                Quero o Juninho no meu encontro
              </Link>
              <a className="btn btn-vazio" href="#musicas">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
                Ouvir Saudade
              </a>
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
            As três coisas vêm da mesma história: a amiga para quem eu prometi
            as vinte músicas.
          </p>
        </div>
      </section>

      {/* ---------- história ---------- */}
      <section className="bloco historia-sec">
        <div className="env">
          <div className="historia-grade">
            <div>
              <p className="rotulo rev">Quem eu sou</p>
              <h2 className="titulo rev d1" style={{ maxWidth: "17ch" }}>
                O nome veio de <em>um sonho</em>.
              </h2>
              <p className="texto rev d2" style={{ marginTop: 22 }}>
                Minha mãe morreu em setembro de 2021, de uma semana para outra.
                Um ano depois sonhei com ela num canteiro de rosas, entregando
                uma flor que eu nunca tinha visto. Na semana seguinte
                reencontrei uma amiga de vinte anos atrás, morando fora,
                recém-separada, depois de perder três filhos antes de eles
                nascerem.
              </p>
              <p className="texto rev d2">
                Quis mandar sementes de rosa para ela, porque flor cortada não
                aguentaria a viagem. Procurei na internet e o quarto resultado
                era semente de rosa do deserto, igualzinha à flor do sonho.
                Depois fui pesquisar o que a planta faz: ela nasce na areia e
                mostra onde tem água.
              </p>
              <p className="texto rev d3">
                Prometi vinte músicas para aquela amiga. Hoje são seiscentas e
                três, e ela continua ouvindo cada uma antes de todo mundo. Quem
                ela é eu não digo.
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
            <p className="rotulo rev">Convites</p>
            <h2 className="titulo rev d1" style={{ maxWidth: "16ch" }}>
              Me chame para cantar <em>no seu encontro</em>.
            </h2>
            <p className="texto rev d2" style={{ marginTop: 22 }}>
              Paróquia, retiro, encontro ou grupo de oração, em qualquer lugar
              do Brasil, inclusive de avião. Eu canto, conto o testemunho de
              cada música, oro com o povo e canto de novo. O tempo se ajusta ao
              que o seu encontro precisar.
            </p>
            <p className="texto rev d2">
              Ando de muletas e não entro em carro comum. Aqui em Londrina o
              carro adaptado sai por volta de duzentos reais a viagem, e por
              isso quem me chama cuida do deslocamento. Prefiro dizer isso logo
              de cara a descobrir junto no dia.
            </p>
            <div className="botoes rev d3" style={{ marginTop: 30 }}>
              <Link className="btn btn-cheio" href="/agenda">
                Fazer um convite
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- músicas ---------- */}
      <section className="bloco musicas-home" id="musicas">
        <div className="env">
          <p className="rotulo rev">Músicas</p>
          <h2 className="titulo rev d1" style={{ maxWidth: "19ch" }}>
            Comece por <em>Saudade</em>, que foi a primeira.
          </h2>
          <div className="musicas-home-grade">
            <div>
              <p className="texto rev d2" style={{ marginTop: 22 }}>
                Quando aquela amiga me contou das três perdas, eu não soube o
                que responder. Fui tomar banho e lembrei de uma coisa que minha
                mãe contava: os médicos mandaram abortar para salvar a vida
                dela, e meu pai pediu para tentarem salvar os dois.
              </p>
              <p className="fala rev d3" style={{ marginTop: 28 }}>
                &ldquo;Qual é a sua diferença para as crianças dela?&rdquo;
              </p>
              <p className="fala-quem rev d3">
                O que eu ouvi dentro do chuveiro
              </p>
              <p className="texto rev d3" style={{ marginTop: 28 }}>
                Saí do banho e escrevi a letra inteira de uma vez. Cantei
                naquela noite para o amigo de Recife que faz as melodias comigo,
                e nós dois choramos. É essa música que está tocando aqui ao
                lado.
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
                Seis músicas, cada uma com o testemunho antes. Pedi patrocínio
                para quase quinhentas pessoas e recebi cinquenta copos de
                brinde. Negociei um orçamento de vinte mil reais para quatro
                mil, fiz uma rifa e vendi metade. Gravei devendo.
              </p>
              <p className="texto rev d2">
                Trinta pessoas foram assistir e ninguém saiu de lá sem chorar.
                O nome do DVD tem explicação, e ela começa justamente nos
                cinquenta copos.
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
              <h2 className="titulo" style={{ maxWidth: "18ch" }}>
                Ainda tem música esperando estúdio.
              </h2>
            </div>
            <div className="rev d1">
              <p className="texto">
                São seiscentas e três compostas e seis gravadas. O que falta
                para as outras saírem do caderno é estúdio, divulgação e
                passagem. Quem quiser ajudar, ajuda por Pix, em qualquer valor.
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
