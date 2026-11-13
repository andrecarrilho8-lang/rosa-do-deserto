import { contribuicao } from "@/lib/dados";
import CopiarPix from "@/components/CopiarPix";

export const metadata = {
  title: "Contribua | Projeto Rosa do Deserto",
  description:
    "Como ajudar o Projeto Rosa do Deserto por Pix ou transferência bancária.",
};

export default function Contribua() {
  return (
    <>
      <section data-cena className="capa">
        <img className="fundo" src="/img/dunas.webp" alt="" />
        <div className="veu" />
        <div className="env">
          <p className="rotulo rev">Contribua</p>
          <h1 className="rev d1">
            Como <em>apoiar o projeto</em>
          </h1>
          <p className="texto rev d2">
            As contribuições são aplicadas em gravação, divulgação e
            deslocamento. Qualquer valor ajuda.
          </p>
        </div>
      </section>

      <section className="bloco">
        <div className="env">
          <div className="contrib-grade">
            <div>
              <h2 className="titulo rev" style={{ maxWidth: "14ch" }}>
                Pix
              </h2>
              <p className="texto rev d1" style={{ marginTop: 20 }}>
                É a forma mais simples e o dinheiro chega na hora. Dá para usar
                a chave ou ler o código com o aplicativo do banco.
              </p>

              <div className="rev d2">
                <CopiarPix chave={contribuicao.pix} />
              </div>

              <div className="qr rev d3">
                {contribuicao.pix ? (
                  <img src="/img/qr-pix.png" alt="Código Pix do projeto" />
                ) : (
                  <div className="qr-vazio">
                    <span>O código aparece aqui assim que a chave Pix for cadastrada.</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="titulo rev" style={{ maxWidth: "16ch" }}>
                Transferência
              </h2>
              <p className="texto rev d1" style={{ marginTop: 20 }}>
                Para quem prefere fazer pelo banco, ou para empresas que precisam
                de comprovante.
              </p>

              <dl className="dados-banco rev d2">
                <div>
                  <dt>Titular</dt>
                  <dd>{contribuicao.nomeTitular || <em>a cadastrar</em>}</dd>
                </div>
                <div>
                  <dt>Banco</dt>
                  <dd>{contribuicao.banco || <em>a cadastrar</em>}</dd>
                </div>
                <div>
                  <dt>Agência</dt>
                  <dd>{contribuicao.agencia || <em>a cadastrar</em>}</dd>
                </div>
                <div>
                  <dt>Conta</dt>
                  <dd>{contribuicao.conta || <em>a cadastrar</em>}</dd>
                </div>
              </dl>

              <div className="aviso rev d3">
                <h4>Empresas e patrocínio</h4>
                <p>
                  Quem quiser apoiar como patrocinador pode ter a marca no site e
                  no material do projeto. O contato para essa conversa está na
                  página de contato.
                </p>
              </div>
            </div>
          </div>

          <div className="onde-vai rev">
            <h3>Para onde vai</h3>
            <p>
              Gravação e mixagem das músicas que ainda não saíram, divulgação na
              internet para a obra chegar em quem precisa ouvir, e o transporte
              adaptado que viabiliza os deslocamentos para as apresentações.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
