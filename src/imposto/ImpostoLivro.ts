import { CalculoImposto } from "./CalculoImposto";

export class ImpostoLivro implements CalculoImposto {

  calcular(preco: number, quantidade: number): number {

    return preco * quantidade;

  }

}
