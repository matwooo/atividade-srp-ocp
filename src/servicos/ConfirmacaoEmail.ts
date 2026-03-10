export class ConfirmacaoEmail {

  enviar(email: string, valor: number): void {

    console.log(`Enviando email para ${email}: Seu pedido de R$ ${valor} foi confirmado.`);

  }

}
