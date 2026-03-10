import { ImpostoEletronico } from "./imposto/ImpostoEletronico";
import { PagamentoPix } from "./pagamento/PagamentoPix";
import { ConfirmacaoEmail } from "./servicos/ConfirmacaoEmail";
import { PedidoService } from "./servicos/PedidoService";

const imposto = new ImpostoEletronico();
const pagamento = new PagamentoPix();
const confirmacao = new ConfirmacaoEmail();

const pedido = new PedidoService(
  imposto,
  pagamento,
  confirmacao
);

pedido.processarPedido(
  100,
  2,
  "cliente@email.com"
);
