import { CalculoImposto } from "./CalculoImposto";

export class ImpostoVestuario implements CalculoImposto {

  calcular(preco: number, quantidade: number): number {

    let total = preco * quantidade;

    return total + total * 0.10;

  }

}
