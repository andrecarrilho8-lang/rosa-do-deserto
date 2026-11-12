import Link from "next/link";
import { Vela } from "@/components/Atmosfera";
import { posts } from "@/lib/dados";

export default function Home() {
  return (
    <>
      {/* ---------- abertura ---------- */}
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
              Seiscentas e três músicas,
              <br />
              <em>quase todas escritas dentro de casa.</em>
            </h1>
            <p className="texto rev d2 hero-lead">
              Juninho Bergamin mora sozinho em Londrina, num apartamento de trinta
              metros quadrados de onde quase nunca consegue sair. Foi ali, na
              maioria das vezes de madrugada, que as músicas foram aparecendo.
            </p>
            <div className="botoes rev d3">
              <a className="btn btn-cheio" href="#saudade">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
                Ouvir Saudade
              </a>
              <Link className="btn btn-vazio" href="/historia">
                Conhecer a história
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ---------- player ---------- */}
      <section className="bloco player-sec" id="saudade">
        <div className="env">
          <div className="player-grade">
            <div>
              <p className="rotulo rev">A primeira de todas</p>
              <h2 className="titulo rev d1">Saudade</h2>
              <p className="texto rev d2" style={{ marginTop: 22 }}>
                Uma amiga contou que tinha perdido três filhos antes de eles
                nascerem. Ele não soube o que responder. Foi tomar banho e
                lembrou de uma coisa que a mãe contava: os médicos mandaram
                abortá-lo para que ela sobrevivesse, e o pai pediu para tentarem
                salvar os dois.
              </p>
              <p className="texto rev d2">
                Ele saiu do chuveiro chorando e escreveu a letra inteira de uma
                vez. Naquela noite cantou pela primeira vez para o amigo que fez
                a melodia. Os dois choraram, e a diarista que estava na casa
                também.
              </p>
              <p className="fala rev d3" style={{ marginTop: 34 }}>
                &ldquo;Qual é a sua diferença para as crianças dela?&rdquo;
              </p>
              <p className="fala-quem rev d3">O que ele ouviu no chuveiro</p>
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
              <Link className="player-link" href="/musicas">
                Ver todas as músicas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- quem é ---------- */}
      <section className="bloco quem-sec">
        <div className="env">
          <div className="quem-grade">
            <div className="rev">
              <img className="quem-foto" src="/img/retrato-estudio.webp" alt="Retrato de Juninho Bergamin" />
            </div>
            <div>
              <p className="rotulo rev">Quem canta</p>
              <h2 className="titulo rev d1" style={{ maxWidth: "15ch" }}>
                Ele prometeu vinte músicas a uma amiga.
              </h2>
              <p className="texto rev d2" style={{ marginTop: 22 }}>
                São seiscentas e três músicas e contando. Ele não senta para
                compor. Quando vem, escreve, e diz que se passar de um minuto
                não escreve mais. As letras são longas de propósito, porque ele
                não suporta música de três frases repetidas até a pessoa parar
                de pensar.
              </p>
              <p className="texto rev d2">
                Antes de cada canção ele conta como ela nasceu. Sem a história
                ninguém entende a música, e sem a música ninguém aguenta a
                história.
              </p>
              <div className="botoes rev d3" style={{ marginTop: 30 }}>
                <Link className="btn btn-vazio" href="/historia">
                  A história completa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- novidades ---------- */}
      <section className="bloco-curto novidades">
        <div className="env">
          <div className="nov-topo">
            <h3>Novidades</h3>
            <Link href="/blog">Ver tudo</Link>
          </div>
          <div className="nov-grade">
            {posts.slice(0, 3).map((p, i) => (
              <Link
                key={p.slug}
                className={`nov rev d${i}`}
                href="/blog"
              >
                <span className="quando">{p.data}</span>
                <span className="tit">{p.titulo}</span>
                <span className="resumo">{p.resumo}</span>
              </Link>
            ))}
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
                <img src="/img/cartaz-dvd.webp" alt="Cartaz do DVD O Casamento, a Rosa e a Pedra" />
              </div>
            </div>
            <div>
              <p className="rotulo rev">Vem aí</p>
              <h2 className="titulo rev d1" style={{ maxWidth: "15ch" }}>
                O Casamento, a Rosa e <em>a Pedra</em>
              </h2>
              <p className="texto rev d2" style={{ marginTop: 22 }}>
                Ele gravou devendo. Pediu patrocínio para quase quinhentas
                pessoas e recebeu cinquenta copos de brinde. Trinta pessoas
                apareceram na plateia. Ninguém saiu sem chorar.
              </p>
              <div className="botoes rev d3" style={{ marginTop: 28 }}>
                <Link className="btn btn-vazio" href="/dvd">
                  A história do DVD
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- convite e apoio ---------- */}
      <section className="bloco-curto duas-portas">
        <div className="env">
          <div className="portas">
            <div className="porta rev">
              <h3>Chame ele para cantar</h3>
              <p>
                Paróquia, retiro, encontro ou grupo de oração, em qualquer lugar
                do Brasil. Ele anda de muletas e não entra em carro comum, então
                quem convida cuida do deslocamento.
              </p>
              <Link href="/agenda">Como convidar</Link>
            </div>
            <div className="porta rev d1">
              <h3>Ajude o projeto a andar</h3>
              <p>
                Cada contribuição vira gravação, divulgação e passagem. Dá para
                ajudar por Pix, em qualquer valor, e tudo que entra é contado
                aqui.
              </p>
              <Link href="/contribua">Como contribuir</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
