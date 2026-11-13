export const metadata = {
  title: "Contato | Projeto Rosa do Deserto",
  description:
    "Fale com o Projeto Rosa do Deserto: convites, imprensa, apoio e pedidos de oração.",
};

const canais = [
  {
    titulo: "Convites e apresentações",
    texto:
      "Para convidar o Juninho para a sua paróquia, retiro ou encontro. Informe a cidade, a data e o público estimado.",
  },
  {
    titulo: "Imprensa e paróquias",
    texto:
      "Entrevistas, divulgação em rádio ou jornal, e material para colocar no boletim da comunidade.",
  },
  {
    titulo: "Apoio e patrocínio",
    texto:
      "Para empresas que queiram apoiar a gravação e o lançamento, com a marca no site e no material.",
  },
];

export default function Contato() {
  return (
    <>
      <section data-cena className="capa">
        <img className="fundo" src="/img/hero-noite.webp" alt="" />
        <div className="veu" />
        <div className="env">
          <p className="rotulo rev">Contato</p>
          <h1 className="rev d1">
            Fale com <em>o projeto</em>.
          </h1>
          <p className="texto rev d2">
            O WhatsApp é o canal mais rápido, respondido diretamente por ele.
          </p>
        </div>
      </section>

      <section className="bloco">
        <div className="env">
          <div className="contato-grade">
            <div>
              <h2 className="titulo rev" style={{ maxWidth: "14ch" }}>
                WhatsApp
              </h2>
              <p className="texto rev d1" style={{ marginTop: 20 }}>
                Envie uma mensagem com o que você precisa. Em caso de convite,
                adiante a cidade e a data do encontro.
              </p>
              <div className="pix-caixa vazia rev d2" style={{ marginTop: 26 }}>
                <span className="pix-rotulo">Número</span>
                <span className="pix-valor">a cadastrar</span>
              </div>

              <h3 className="sub rev">Imprensa</h3>
              <p className="texto rev d1">
                Fotos em alta resolução, logos, biografia e release ficam
                disponíveis para download aqui assim que o material estiver
                fechado.
              </p>
            </div>

            <div>
              <h2 className="titulo rev" style={{ maxWidth: "16ch" }}>
                Sobre o que você quer falar
              </h2>
              <div className="canais rev d1">
                {canais.map((c) => (
                  <div key={c.titulo} className="canal">
                    <h4>{c.titulo}</h4>
                    <p>{c.texto}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
