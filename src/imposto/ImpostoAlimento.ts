import { CalculoImposto } from "./CalculoImposto";

export class ImpostoAlimento implements CalculoImposto {

  calcular(preco: number, quantidade: number): number {

    let total = preco * quantidade;

    return total + total * 0.05;

  }

}
