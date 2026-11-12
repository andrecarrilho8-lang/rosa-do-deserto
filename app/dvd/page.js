import Link from "next/link";
import { Vela } from "@/components/Atmosfera";

export const metadata = {
  title: "O Casamento, a Rosa e a Pedra | Projeto Rosa do Deserto",
  description:
    "A história do DVD de Juninho Bergamin: cinquenta copos, uma pregação sobre as bodas de Caná e trinta pessoas na plateia.",
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
            Seis músicas, seis testemunhos, gravados numa sala com velas no chão
            e uma poltrona vermelha.
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
                Por que casamento?
              </h2>
              <p className="texto rev d1" style={{ marginTop: 22 }}>
                No aniversário dele, um amigo encheu a cabeça dele com a ideia de
                gravar as músicas junto com os testemunhos. Ele achou impossível,
                porque não tinha dinheiro para nada. Foi orar justamente para
                convencer Deus a tirar aquilo da cabeça dele.
              </p>
              <p className="fala rev d2" style={{ marginTop: 30 }}>
                &ldquo;Eu quero que você faça uma festa de casamento.&rdquo;
              </p>
              <p className="texto rev d2" style={{ marginTop: 30 }}>
                Naquela mesma noite caiu por acaso numa pregação sobre as bodas
                de Caná, a festa onde Jesus transformou água em vinho. O padre
                falou da vida como a noiva que espera o noivo. Ele entendeu que
                não ia escapar.
              </p>

              <h3 className="sub rev">Os cinquenta copos</h3>
              <p className="texto rev d1">
                Pediu patrocínio para quase quinhentas pessoas, oferecendo
                divulgar a marca de quem ajudasse. Uma mulher respondeu que
                dinheiro não dava, mas que podia mandar copos. Chegaram cinquenta
                copos simples, com a logo do DVD, que ele não conseguiria vender
                nem por dois reais.
              </p>
              <p className="texto rev d1">
                Ficaram meses parados em cima da mesa da sala. Toda vez que
                passava perto, pensava em jogar fora. Até que pediu um sinal
                definitivo e, no dia seguinte, o primeiro vídeo que apareceu no
                celular explicava que, entre os israelitas, era o copo que selava
                a aliança do casamento. Desconfiou que fosse invenção. Foi
                assistir a um filme sobre Maria e viu a cena: o pai dela passa o
                vinho num copo para José, e José para Maria, no lugar das
                alianças.
              </p>

              <h3 className="sub rev">A gravação</h3>
              <p className="texto rev d1">
                Um orçamento de vinte mil reais virou quatro mil, para seis
                músicas em áudio e vídeo. Ele fez uma rifa de cinquenta reais e
                vendeu metade. Na semana da gravação ainda tentou desmarcar.
              </p>
              <p className="texto rev d1">
                Chegou no estúdio e encontrou oito degraus na entrada. Quatro
                homens o carregaram na cadeira de rodas até lá em cima. Trinta
                pessoas apareceram para assistir, e ele diz que nenhuma saiu sem
                chorar. Ele também chorava enquanto cantava, segurando para não
                aparecer, porque cada música traz a história de volta.
              </p>
              <p className="fala rev d2" style={{ marginTop: 30 }}>
                &ldquo;Você não depende de você, você depende de mim.&rdquo;
              </p>
              <p className="fala-quem rev d2">
                O que ele ouviu no pé da escada
              </p>

              <div className="botoes rev d3" style={{ marginTop: 40 }}>
                <Link className="btn btn-cheio" href="/musicas">
                  Ouvir o que já saiu
                </Link>
                <Link className="btn btn-vazio" href="/contribua">
                  Ajudar o lançamento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
