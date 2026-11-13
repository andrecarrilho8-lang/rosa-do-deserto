const ladrilhos = [
  { src: "/img/gal-cantando.webp", legenda: "No estúdio", tom: "tom-vermelho", classe: "alta" },
  { src: "/img/gal-sorriso.webp", legenda: "Entre uma música e outra", tom: "tom-vela", classe: "" },
  { src: "/img/gal-perfil.webp", legenda: "Luz natural", tom: "", classe: "alta" },
  { src: "/img/gal-varanda.webp", legenda: "A varanda de casa", tom: "tom-creme", classe: "" },
  { src: "/img/gal-jardim.webp", legenda: "Fora de casa", tom: "tom-vela", classe: "larga" },
  { src: "/img/gal-vinho.webp", legenda: "Antes de gravar", tom: "tom-vermelho", classe: "" },
];

export default function Galeria() {
  return (
    <section className="galeria">
      <div className="env">
        <div className="galeria-topo">
          <div>
            <p className="rotulo rev">Retratos</p>
            <h2 className="rev d1">
              A maior parte das canções nasceu <em>dentro de casa</em>.
            </h2>
          </div>
          <p className="rev d2">
            Entre o apartamento em Londrina, a varanda e o estúdio onde o DVD
            foi gravado.
          </p>
        </div>

        <div className="mosaico">
          {ladrilhos.map((l) => (
            <figure
              key={l.src}
              className={`ladrilho ${l.classe}`}
              data-cena
            >
              <div className={`duo ${l.tom}`}>
                <img src={l.src} alt="" loading="lazy" />
                <span className="realce" />
              </div>
              <figcaption className="ladrilho-legenda">{l.legenda}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
