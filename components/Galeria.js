const ladrilhos = [
  { src: "/img/gal-cantando.webp", tom: "tom-vermelho" },
  { src: "/img/gal-sorriso.webp", tom: "tom-vela" },
  { src: "/img/gal-perfil.webp", tom: "" },
  { src: "/img/gal-varanda.webp", tom: "tom-creme" },
  { src: "/img/gal-estudio.webp", tom: "tom-vela" },
  { src: "/img/gal-vinho.webp", tom: "tom-vermelho" },
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
            <figure key={l.src} className="ladrilho" data-cena>
              <div className={`duo ${l.tom}`}>
                <img src={l.src} alt="" loading="lazy" />
                <span className="realce" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
