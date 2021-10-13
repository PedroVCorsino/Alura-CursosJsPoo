import { Cliente } from "./cliente.js";
import { Conta } from "./conta.js";
import { ContaCorrente } from "./contaCorrente.js";
import { ContaPoupanca } from "./contaPoupanca.js";

const cliente1 = new Cliente("Ricardo",11122233301);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(200);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)


//console.log(`${contaCorrenteRicardo.cliente.nome} --> ${contaCorrenteRicardo.saldo}`)

console.log(contaCorrenteRicardo)
console.log(contaPoupanca)