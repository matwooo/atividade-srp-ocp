# atividade-srp-ocp

# Atividade Prática – Refatoração com SRP e OCP

Aluno: Mateo Hernan Rivera Henrique

## Descrição

Este projeto foi desenvolvido como parte de uma atividade prática sobre princípios de arquitetura e qualidade de software. O objetivo foi analisar um código de um sistema de gerenciamento de pedidos que apresentava problemas de design e refatorá-lo aplicando os princípios SRP (Single Responsibility Principle) e OCP (Open/Closed Principle).

## Problema Inicial

No código original, a classe `ProcessadorPedido` possuía várias responsabilidades ao mesmo tempo, como:

- calcular o total do pedido
- aplicar impostos dependendo do tipo de produto
- processar diferentes formas de pagamento
- enviar confirmação por email

Além disso, o sistema utilizava estruturas `switch` para decidir o tipo de imposto e o tipo de pagamento. Isso fazia com que fosse necessário modificar a classe sempre que um novo produto ou uma nova forma de pagamento fosse adicionada.

## Refatoração Aplicando SRP

Para aplicar o princípio da responsabilidade única, cada parte do sistema foi separada em classes diferentes. Dessa forma, cada classe possui apenas uma responsabilidade específica.

Foram criadas classes responsáveis por:

- cálculo de impostos
- processamento de pagamentos
- envio de confirmação por email
- gerenciamento do fluxo do pedido

Isso torna o sistema mais organizado, fácil de manter e mais simples de testar.

## Refatoração Aplicando OCP

Para aplicar o princípio aberto/fechado, foram criadas interfaces que permitem adicionar novos comportamentos sem modificar o código existente.

Interfaces utilizadas:

- `CalculoImposto`
- `ProcessadorPagamento`

Cada tipo de imposto e cada forma de pagamento implementa uma dessas interfaces, permitindo que novos tipos sejam adicionados apenas criando novas classes.

## Estrutura do Projeto

O projeto foi organizado da seguinte forma:

src  
 ├── imposto  
 │ ├── CalculoImposto.ts  
 │ ├── ImpostoEletronico.ts  
 │ ├── ImpostoAlimento.ts  
 │ ├── ImpostoVestuario.ts  
 │ └── ImpostoLivro.ts  

 ├── pagamento  
 │ ├── ProcessadorPagamento.ts  
 │ ├── PagamentoCartao.ts  
 │ ├── PagamentoBoleto.ts  
 │ ├── PagamentoPix.ts  
 │ └── PagamentoCriptomoeda.ts  

 ├── servicos  
 │ ├── ConfirmacaoEmail.ts  
 │ └── PedidoService.ts  

 └── main.ts

## Extensões Implementadas

Após a refatoração, foi possível adicionar novos comportamentos sem modificar as classes existentes.

Foram adicionados:

Produto **Livro** com imposto de **0%**

Pagamento por **Criptomoeda**

Isso demonstra que o sistema está preparado para extensão, seguindo corretamente o princípio OCP.

## Conclusão

A refatoração permitiu melhorar a organização do código, separando responsabilidades e tornando o sistema mais flexível. A utilização de interfaces e classes específicas para cada comportamento facilita a manutenção e permite que novas funcionalidades sejam adicionadas sem alterar o código já existente.
