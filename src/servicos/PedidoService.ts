import { CalculoImposto } from "../imposto/CalculoImposto";
import { ProcessadorPagamento } from "../pagamento/ProcessadorPagamento";
import { ConfirmacaoEmail } from "./ConfirmacaoEmail";

export class PedidoService {

  private imposto: CalculoImposto;
  private pagamento: ProcessadorPagamento;
  private confirmacao: ConfirmacaoEmail;

  constructor(
    imposto: CalculoImposto,
    pagamento: ProcessadorPagamento,
    confirmacao: ConfirmacaoEmail
  ) {
    this.imposto = imposto;
    this.pagamento = pagamento;
    this.confirmacao = confirmacao;
  }

  processarPedido(preco: number, quantidade: number, email: string) {

    const total = this.imposto.calcular(preco, quantidade);

    this.pagamento.processar(total);

    this.confirmacao.enviar(email, total);

  }

}
