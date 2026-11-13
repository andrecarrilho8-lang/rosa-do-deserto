import Link from "next/link";
import { agenda } from "@/lib/dados";

export const metadata = {
  title: "Convites e agenda | Projeto Rosa do Deserto",
  description:
    "Como convidar Juninho Bergamin para cantar e dar testemunho em paróquias, retiros e encontros.",
};

const precisa = [
  "Acesso sem escada até o palco, ou rampa",
  "Cadeira ou banqueta alta, porque a apresentação é feita sentado",
  "Transporte adaptado do aeroporto até o local",
  "Som com retorno e um microfone com pedestal",
];

export default function Agenda() {
  return (
    <>
      <section data-cena className="capa">
        <img className="fundo" src="/img/palco.webp" alt="" />
        <div className="veu" />
        <div className="env">
          <p className="rotulo rev">Convites e agenda</p>
          <h1 className="rev d1">
            Apresentações em <em>todo o Brasil</em>
          </h1>
          <p className="texto rev d2">
            Paróquias, retiros, encontros e grupos de oração, inclusive fora do
            Paraná e com deslocamento aéreo.
          </p>
        </div>
      </section>

      <section className="bloco">
        <div className="env">
          <div className="agenda-grade">
            <div>
              <h2 className="titulo rev" style={{ maxWidth: "17ch" }}>
                Como é a apresentação
              </h2>
              <p className="texto rev d1" style={{ marginTop: 22 }}>
                O roteiro alterna canção, testemunho e oração. Antes de cada
                música, Juninho conta o episódio que deu origem à letra. Não é
                um show de músicas emendadas, e a duração se ajusta à
                programação do encontro.
              </p>
              <p className="fala rev d2" style={{ marginTop: 30 }}>
                &ldquo;O povo tem que sair de lá convencido de que Deus existe,
                mesmo que não lembre o meu nome.&rdquo;
              </p>
              <p className="fala-quem rev d2">Juninho Bergamin</p>

              <h3 className="sub rev">O que é necessário no local</h3>
              <p className="texto rev d1">
                Juninho anda de muletas e não entra em carro comum. Em Londrina,
                o transporte adaptado custa cerca de duzentos reais por viagem,
                e por isso o deslocamento fica a cargo de quem convida. Deixar
                isso combinado antes evita constrangimento para os dois lados.
              </p>
              <ul className="precisa rev d2">
                {precisa.map((p) => (
                  <li key={p}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="botoes rev d3" style={{ marginTop: 36 }}>
                <Link className="btn btn-cheio" href="/contato">
                  Fazer um convite
                </Link>
              </div>
            </div>

            <aside>
              <h3 className="sub-aside rev">Próximas datas</h3>
              {agenda.length ? (
                <ul className="datas rev d1">
                  {agenda.map((d) => (
                    <li key={d.id}>
                      <span className="data-dia">{d.data}</span>
                      <span className="data-local">{d.local}</span>
                      <span className="data-cidade">{d.cidade}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="sem-datas rev d1">
                  <strong>Nenhuma data confirmada no momento</strong>
                  <span>
                    As apresentações agendadas passam a ser listadas aqui assim
                    que forem confirmadas.
                  </span>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
