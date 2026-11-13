import Link from "next/link";
import { loja } from "@/lib/dados";
import { pedidoDeItem, temWhats } from "@/lib/whats";

export const metadata = {
  title: "Lojinha | Projeto Rosa do Deserto",
  description:
    "Os itens do Projeto Rosa do Deserto ficam expostos aqui e o pedido é feito pelo WhatsApp.",
};

const passos = [
  {
    n: "01",
    titulo: "Escolha o item",
    texto:
      "Cada item traz a descrição e o valor. Não existe carrinho nem cadastro.",
  },
  {
    n: "02",
    titulo: "Chame no WhatsApp",
    texto:
      "O botão abre a conversa com o nome do item já escrito. Basta enviar.",
  },
  {
    n: "03",
    titulo: "Combine pagamento e entrega",
    texto:
      "Forma de pagamento, prazo e envio são acertados ali mesmo, na conversa.",
  },
];

export default function Loja() {
  const itens = loja.itens;
  const ligado = temWhats();

  return (
    <>
      <section data-cena className="capa">
        <img className="fundo" src="/img/petalas.webp" alt="" />
        <div className="veu" />
        <div className="env">
          <p className="rotulo rev">Lojinha</p>
          <h1 className="rev d1">
            Os itens do <em>projeto</em>
          </h1>
          <p className="texto rev d2">
            Aqui os itens ficam expostos e o pedido é feito pelo WhatsApp, numa
            conversa direta com o projeto.
          </p>
        </div>
      </section>

      <section className="bloco loja-sec" data-cena>
        <div className="env">
          {itens.length > 0 ? (
            <>
              <div className="vitrine">
                {itens.map((item, i) => {
                  const link = pedidoDeItem(item.nome);
                  return (
                    <article
                      key={item.slug}
                      className={`item rev d${(i % 4) + 1}`}
                    >
                      <div className="item-foto duo">
                        {item.foto ? (
                          <img src={item.foto} alt={item.nome} />
                        ) : (
                          <img
                            className="item-selo"
                            src="/img/simbolo.svg"
                            alt=""
                          />
                        )}
                        <span className="realce" />
                        {item.esgotado && (
                          <span className="item-tarja">Esgotado</span>
                        )}
                      </div>

                      <div className="item-corpo">
                        <h2 className="item-nome">{item.nome}</h2>
                        {item.descricao && (
                          <p className="item-desc">{item.descricao}</p>
                        )}
                        <p className="item-valor">
                          {item.valor || "Valor combinado na conversa"}
                        </p>

                        {item.esgotado ? (
                          <span className="btn btn-vazio item-btn desligado">
                            Esgotado
                          </span>
                        ) : link ? (
                          <a
                            className="btn btn-cheio item-btn"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Pedir pelo WhatsApp
                          </a>
                        ) : (
                          <span className="btn btn-vazio item-btn desligado">
                            WhatsApp a cadastrar
                          </span>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="loja-passos rev">
                {passos.map((p) => (
                  <div key={p.n} className="passo">
                    <b>{p.n}</b>
                    <h3>{p.titulo}</h3>
                    <p>{p.texto}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="vitrine-vazia rev">
              <img src="/img/simbolo.svg" alt="" />
              <h2 className="titulo">Os primeiros itens estão em produção.</h2>
              <p className="texto">
                A lojinha abre assim que a produção dos itens ficar pronta.
                Quando isso acontecer, cada item aparece nesta página com foto,
                descrição e valor, e o pedido sai por uma conversa no WhatsApp.
              </p>
              <div className="botoes" style={{ marginTop: 30 }}>
                <Link className="btn btn-cheio" href="/contato">
                  Avisar quando abrir
                </Link>
                <Link className="btn btn-vazio" href="/contribua">
                  Contribuir com o projeto
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {!ligado && itens.length > 0 && (
        <section className="bloco-curto">
          <div className="env">
            <p className="texto rev">
              Os botões de pedido entram no ar junto com o número de WhatsApp do
              projeto.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
