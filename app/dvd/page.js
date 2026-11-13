import Link from "next/link";
import { Vela } from "@/components/Atmosfera";

export const metadata = {
  title: "O Casamento, a Rosa e a Pedra | Projeto Rosa do Deserto",
  description:
    "O DVD de Juninho Bergamin: seis canções, seis testemunhos e a produção que o viabilizou.",
};

export default function Dvd() {
  return (
    <>
      <section className="capa">
        <img className="fundo" src="/img/rosa-pedra.webp" alt="" />
        <div className="veu" />
        <div className="env">
          <p className="rotulo rev">O DVD</p>
          <h1 className="rev d1">
            O Casamento, a Rosa e <em>a Pedra</em>
          </h1>
          <p className="texto rev d2">
            Seis canções, cada uma precedida do testemunho que a originou,
            gravadas em áudio e vídeo diante de plateia.
          </p>
        </div>
      </section>

      <section className="bloco">
        <Vela />
        <div className="env">
          <div className="dvd-conteudo">
            <div className="dvd-cartaz rev">
              <div className="cartaz">
                <img src="/img/cartaz-dvd.webp" alt="Cartaz do DVD" />
              </div>
            </div>
            <div className="dvd-texto">
              <h2 className="titulo rev" style={{ maxWidth: "16ch" }}>
                A origem do título
              </h2>
              <p className="texto rev d1" style={{ marginTop: 22 }}>
                A ideia de gravar as canções junto com os testemunhos partiu de
                um amigo, no aniversário de Juninho. Sem recursos para a
                produção, ele conta que foi orar justamente para abandonar o
                projeto, e que ouviu o contrário.
              </p>
              <p className="fala rev d2" style={{ marginTop: 30 }}>
                &ldquo;Eu quero que você faça uma festa de casamento.&rdquo;
              </p>
              <p className="fala-quem rev d2">
                O que ele relata ter ouvido em oração
              </p>
              <p className="texto rev d2" style={{ marginTop: 30 }}>
                Na mesma noite assistiu, por acaso, a uma pregação sobre as
                bodas de Caná, a festa em que Jesus transformou água em vinho.
                O título do DVD nasceu dessa coincidência.
              </p>

              <h3 className="sub rev">Os cinquenta copos</h3>
              <p className="texto rev d1">
                Juninho procurou patrocínio junto a cerca de quinhentas pessoas,
                oferecendo divulgação da marca de quem apoiasse. A única
                resposta concreta veio de uma mulher que, em vez de dinheiro,
                enviou cinquenta copos simples com a logomarca do DVD.
              </p>
              <p className="texto rev d1">
                Os copos ficaram meses sobre a mesa da sala. Segundo ele, a
                virada veio ao descobrir que, entre os israelitas, era o copo
                que selava a aliança do casamento, e ao reencontrar essa mesma
                cena num filme sobre Maria, em que o vinho passa de mão em mão
                no lugar das alianças.
              </p>

              <h3 className="sub rev">A gravação</h3>
              <p className="texto rev d1">
                O orçamento inicial, de vinte mil reais, foi negociado para
                quatro mil, cobrindo seis músicas em áudio e vídeo. Uma rifa de
                cinquenta reais ajudou a compor o valor e vendeu metade dos
                bilhetes. Parte do custo seguia em aberto no dia da gravação.
              </p>
              <p className="texto rev d1">
                O estúdio tinha oito degraus na entrada, e quatro homens
                carregaram a cadeira de rodas até o andar de cima. Trinta
                pessoas assistiram. Juninho afirma que ninguém deixou o local
                sem chorar, e que ele mesmo cantou chorando, porque cada música
                traz o episódio de volta.
              </p>
              <p className="fala rev d2" style={{ marginTop: 30 }}>
                &ldquo;Você não depende de você, você depende de mim.&rdquo;
              </p>
              <p className="fala-quem rev d2">
                O que ele relata ter ouvido no pé da escada
              </p>

              <div className="botoes rev d3" style={{ marginTop: 40 }}>
                <Link className="btn btn-cheio" href="/musicas">
                  Ouvir o que já saiu
                </Link>
                <Link className="btn btn-vazio" href="/contribua">
                  Apoiar o lançamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
