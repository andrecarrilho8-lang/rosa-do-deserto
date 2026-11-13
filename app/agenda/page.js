import Link from "next/link";
import { agenda } from "@/lib/dados";

export const metadata = {
  title: "Convites e agenda | Projeto Rosa do Deserto",
  description:
    "Como convidar Juninho Bergamin para cantar e dar testemunho na sua paróquia, retiro ou encontro.",
};

const precisa = [
  "Acesso sem escada até o palco, ou uma rampa",
  "Cadeira ou banqueta alta, porque eu canto sentado",
  "Transporte adaptado do aeroporto até o local",
  "Som com retorno e um microfone com pedestal",
];

export default function Agenda() {
  return (
    <>
      <section className="capa">
        <img className="fundo" src="/img/palco.webp" alt="" />
        <div className="veu" />
        <div className="env">
          <p className="rotulo rev">Convites e agenda</p>
          <h1 className="rev d1">
            Eu vou. <em>Só preciso chegar.</em>
          </h1>
          <p className="texto rev d2">
            Paróquia, retiro, encontro, grupo de oração. Em qualquer lugar do
            Brasil, inclusive de avião.
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
                Eu canto, conto como fiz aquela música, oro com as pessoas e
                canto de novo. Não é show de vinte músicas emendadas, e eu faço
                questão disso. A duração se ajusta ao que o seu encontro
                precisar.
              </p>
              <p className="fala rev d2" style={{ marginTop: 30 }}>
                &ldquo;O povo tem que sair de lá convencido de que Deus existe,
                mesmo que não lembre o meu nome.&rdquo;
              </p>

              <h3 className="sub rev">O que eu preciso no local</h3>
              <p className="texto rev d1">
                Ando de muletas e não entro em carro comum. Aqui em Londrina o
                carro adaptado sai por volta de duzentos reais a viagem, e por
                isso quem me convida cuida do deslocamento. Deixar isso
                combinado antes poupa constrangimento dos dois lados.
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
                  <strong>Ainda não tenho data marcada</strong>
                  <span>
                    As apresentações confirmadas aparecem aqui. Se você quiser
                    ser a primeira, é só me chamar.
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
