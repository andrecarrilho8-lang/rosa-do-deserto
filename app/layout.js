import "./globals.css";
import Nav from "@/components/Nav";
import Rodape from "@/components/Rodape";
import Revelar from "@/components/Revelar";
import Abertura from "@/components/Abertura";
import { Petalas } from "@/components/Atmosfera";

export const metadata = {
  title: "Projeto Rosa do Deserto | Juninho Bergamin",
  description:
    "Juninho Bergamin compôs seiscentas e três músicas em dois anos e meio, quase sem sair de casa. Cada uma começa num testemunho.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200..700;1,9..144,200..600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/img/simbolo.svg" />
      </head>
      <body>
        <Abertura />
        <Petalas />
        <Nav />
        <main>{children}</main>
        <Rodape />
        <Revelar />
      </body>
    </html>
  );
}
