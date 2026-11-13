import { whatsapp } from "./dados";

export function temWhats() {
  return Boolean(whatsapp.numero);
}

// Monta o link da conversa ja com a mensagem escrita. Devolve null enquanto o
// numero do projeto nao estiver cadastrado, e quem chama trata o botao como
// desligado.
export function linkWhats(mensagem) {
  if (!whatsapp.numero) return null;
  return `https://wa.me/${whatsapp.numero}?text=${encodeURIComponent(mensagem)}`;
}

export function pedidoDeItem(nome) {
  return linkWhats(
    `Ola! Vi o site do Projeto Rosa do Deserto e queria pedir: ${nome}.`
  );
}
