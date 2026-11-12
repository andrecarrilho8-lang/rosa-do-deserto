import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="env">
        <div className="grade">
          <div>
            <img className="assin" src="/img/assinatura.svg" alt="Rosa do Deserto" />
            <p>
              Projeto musical de Juninho Bergamin. Londrina, Paraná. Testemunho e
              canção.
            </p>
          </div>
          <div>
            <h5>Ouvir</h5>
            <ul>
              <li>
                <a
                  href="https://youtu.be/bVfFE7b9ybc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li><span className="pendente">Spotify, a confirmar</span></li>
              <li><span className="pendente">Instagram, a confirmar</span></li>
              <li><span className="pendente">Facebook, a confirmar</span></li>
            </ul>
          </div>
          <div>
            <h5>Falar com o projeto</h5>
            <ul>
              <li><Link href="/agenda">Convites e apresentações</Link></li>
              <li><Link href="/contribua">Como contribuir</Link></li>
              <li><Link href="/blog">Blog e novidades</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>
        </div>
        <div className="base">
          <span>Projeto Rosa do Deserto, 2026</span>
          <span>Site em construção, conteúdo sendo preenchido</span>
        </div>
      </div>
    </footer>
  );
}
