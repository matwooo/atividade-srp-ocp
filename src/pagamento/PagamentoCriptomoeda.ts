import { ProcessadorPagamento } from "./ProcessadorPagamento";

export class PagamentoCriptomoeda implements ProcessadorPagamento {

  processar(valor: number): void {

    console.log(`Pagamento realizado com criptomoeda no valor de R$ ${valor}`);

  }

}
