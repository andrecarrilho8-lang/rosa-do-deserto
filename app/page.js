import Link from "next/link";
import { Vela } from "@/components/Atmosfera";
import HeroFotos from "@/components/HeroFotos";
import Galeria from "@/components/Galeria";
import { posts, ep } from "@/lib/dados";

export default function Home() {
  return (
    <>
      {/* ---------- apresentação institucional ---------- */}
      <header className="hero">
        <HeroFotos />
        <div className="hero-veu" />
        <Vela />
        <div className="env hero-dentro">
          <div className="hero-conteudo">
            <img className="selo rev" src="/img/rosa-traco.svg" alt="" />
            <p className="rotulo rev">Projeto Rosa do Deserto</p>
            <h1 className="rev d1">Juninho Bergamin</h1>
            <p className="hero-funcao rev d1">
              Cantor e compositor católico · Londrina, Paraná
            </p>
            <p className="texto rev d2 hero-lead">
              O Projeto Rosa do Deserto reúne a obra autoral de Juninho
              Bergamin: seiscentas e três canções compostas em dois anos e meio,
              o EP Rosa do Deserto, nas plataformas desde {ep.lancamento}, e o
              DVD O Casamento, a Rosa e a Pedra, gravado com seis músicas e os
              testemunhos que deram origem a cada uma.
            </p>
            <p className="texto rev d2 hero-lead">
              O trabalho é levado a paróquias, retiros, encontros e grupos de
              oração em todo o Brasil, sempre no mesmo formato: a canção vem
              depois da história que a gerou.
            </p>

            <div className="botoes rev d3">
              <Link className="btn btn-cheio" href="/historia">
                Conheça o projeto
              </Link>
              <a className="btn btn-vazio" href="#musicas">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
                Ouça as músicas
              </a>
            </div>

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
        </div>
      </section>

      {/* ---------- o projeto ---------- */}
      <section className="bloco historia-sec">
        <div className="env">
          <div className="historia-grade">
            <div>
              <p className="rotulo rev">O projeto</p>
              <h2 className="titulo rev d1" style={{ maxWidth: "18ch" }}>
                A rosa do deserto nasce na areia e <em>mostra onde tem água</em>.
              </h2>
              <p className="texto rev d2" style={{ marginTop: 22 }}>
                O nome do projeto vem dessa planta e de um sonho. Em setembro de
                2021 Juninho perdeu a mãe. Um ano depois sonhou com ela num
                canteiro de rosas, entregando uma flor que ele não conhecia. Na
                semana seguinte reencontrou uma amiga de vinte anos atrás,
                recém-separada, que havia perdido três filhos antes de eles
                nascerem.
              </p>
              <p className="texto rev d2">
                Ao procurar sementes de rosa para enviar a ela, encontrou a rosa
                do deserto e reconheceu a flor do sonho. As canções começaram
                ali, como uma promessa de vinte músicas que hoje são seiscentas
                e três. A identidade dessa amiga nunca foi revelada, e não será.
              </p>
              <p className="fala rev d3" style={{ marginTop: 30 }}>
                &ldquo;Foi só um jeito de Deus me mostrar o conceito.&rdquo;
              </p>
              <p className="fala-quem rev d3">Juninho Bergamin</p>
              <div className="botoes rev d3" style={{ marginTop: 30 }}>
                <Link className="btn btn-vazio" href="/historia">
                  A história completa
                </Link>
              </div>
            </div>
            <div className="rev d1" data-cena>
              <div className="duo tom-vermelho historia-foto">
                <img src="/img/gal-estudio.webp" alt="Retrato de Juninho Bergamin" />
                <span className="realce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Galeria />

      {/* ---------- convites ---------- */}
      <section className="bloco agenda-home" data-cena>
        <img className="agenda-fundo" src="/img/palco.webp" alt="" aria-hidden="true" />
        <div className="agenda-veu" />
        <div className="env">
          <div className="agenda-home-conteudo">
            <p className="rotulo rev">Convites</p>
            <h2 className="titulo rev d1" style={{ maxWidth: "17ch" }}>
              Apresentações em todo o Brasil
            </h2>
            <p className="texto rev d2" style={{ marginTop: 22 }}>
              O projeto atende paróquias, retiros, encontros e grupos de oração,
              inclusive fora do Paraná. A apresentação alterna canção,
              testemunho e oração, e a duração se ajusta à programação de cada
              encontro.
            </p>
            <p className="texto rev d2">
              Juninho anda de muletas e não entra em carro comum. O transporte
              adaptado custa cerca de duzentos reais por viagem, e por isso o
              deslocamento fica a cargo de quem convida. A página de convites
              traz a lista do que é necessário no local.
            </p>
            <div className="botoes rev d3" style={{ marginTop: 30 }}>
              <Link className="btn btn-cheio" href="/agenda">
                Como convidar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- músicas ---------- */}
      <section className="bloco musicas-home" id="musicas">
        <div className="env">
          <p className="rotulo rev">Músicas</p>
          <h2 className="titulo rev d1" style={{ maxWidth: "20ch" }}>
            <em>Saudade</em>, a primeira canção do projeto
          </h2>
        </div>

        <div className="home-palco" data-cena>
          <div className="env">
            <div className="quadro">
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

        <div className="env">
          <div className="musicas-home-texto">
            <div>
              <p className="texto rev">
                Foi escrita de uma só vez, na noite em que uma amiga contou das
                três perdas. Ao orar, Juninho lembrou de um episódio da própria
                família: os médicos indicaram o aborto para salvar a vida da mãe
                dele, e o pai pediu que tentassem salvar os dois.
              </p>
              <p className="texto rev d1">
                A melodia foi feita no mesmo dia com um parceiro de Recife, que
                trabalha com ele por telefone. A canção abriu o EP e abre também
                as apresentações.
              </p>
            </div>
            <div>
              <p className="fala rev d2">
                &ldquo;Qual é a sua diferença para as crianças dela?&rdquo;
              </p>
              <p className="fala-quem rev d2">
                A pergunta que ele diz ter ouvido naquele dia
              </p>
              <div className="botoes rev d3" style={{ marginTop: 30 }}>
                <Link className="btn btn-cheio" href="/musicas">
                  Todas as músicas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- DVD ---------- */}
      <section className="dvd-destaque" data-cena>
        <img
          className="dvd-fundo"
          src="/img/rosa-pedra.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="dvd-veu" />
        <Vela />
        <div className="env">
          <div className="dvd-destaque-grade">
            <div className="dvd-poster rev">
              <div className="dvd-poster-moldura">
                <img
                  src="/img/cartaz-dvd.webp"
                  alt="Cartaz do DVD O Casamento, a Rosa e a Pedra"
                />
              </div>
            </div>

            <div className="dvd-destaque-texto">
              <span className="selo-vem rev">
                <i aria-hidden="true" />
                Vem aí
              </span>
              <h2 className="dvd-titulo rev d1">
                O Casamento,
                <br />
                a Rosa e <em>a Pedra</em>
              </h2>
              <p className="texto rev d2" style={{ marginTop: 24 }}>
                O primeiro DVD do projeto. Seis canções, cada uma precedida do
                testemunho que a originou, gravadas em áudio e vídeo diante de
                plateia.
              </p>
              <ul className="dvd-numeros rev d3">
                <li>
                  <b>6</b>
                  <span>canções gravadas</span>
                </li>
                <li>
                  <b>6</b>
                  <span>testemunhos</span>
                </li>
                <li>
                  <b>30</b>
                  <span>pessoas na plateia</span>
                </li>
              </ul>
              <div className="botoes rev d4" style={{ marginTop: 34 }}>
                <Link className="btn btn-cheio" href="/dvd">
                  A história do DVD
                </Link>
                <Link className="btn btn-vazio" href="/musicas">
                  Ouvir o que já saiu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- lojinha ---------- */}
      <section className="bloco-curto lojinha-home" data-cena>
        <div className="env">
          <div className="lojinha-home-grade">
            <div className="lojinha-marca rev">
              <img className="textura" src="/img/petalas.webp" alt="" />
              <img className="rosa" src="/img/simbolo.svg" alt="" />
            </div>

            <div>
              <p className="rotulo rev">Lojinha</p>
              <h2 className="titulo rev d1" style={{ maxWidth: "17ch" }}>
                A lojinha do projeto
              </h2>
              <p className="texto rev d2" style={{ marginTop: 20 }}>
                Os primeiros itens estão em produção. Quando ficarem prontos,
                aparecem na lojinha com foto, descrição e valor. O pedido é
                feito por uma conversa no WhatsApp, sem carrinho e sem
                cadastro.
              </p>
              <div className="botoes rev d3" style={{ marginTop: 28 }}>
                <Link className="btn btn-vazio" href="/loja">
                  Ver a lojinha
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
              <h2 className="titulo" style={{ maxWidth: "19ch" }}>
                Seiscentas e três compostas, seis gravadas.
              </h2>
            </div>
            <div className="rev d1">
              <p className="texto">
                As demais canções dependem de estúdio, divulgação e
                deslocamento. As contribuições do público são aplicadas nesses
                três itens e podem ser feitas por Pix, em qualquer valor.
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
