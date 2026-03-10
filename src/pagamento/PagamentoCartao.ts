import { ProcessadorPagamento } from "./ProcessadorPagamento";

export class PagamentoCartao implements ProcessadorPagamento {

  processar(valor: number): void {

    console.log(`Processando pagamento com cartão: R$ ${valor}`);

  }

}
