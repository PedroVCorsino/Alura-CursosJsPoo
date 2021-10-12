import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente("Ricardo",11122233301);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente("Alice", 11122233302);

const contaCorrenteAlice = new ContaCorrente(cliente2, 1002);



contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.trasferir(200, contaCorrenteAlice);

console.log(`${contaCorrenteRicardo.cliente.nome} --> ${contaCorrenteRicardo.saldo}`)
console.log(`${contaCorrenteAlice.cliente.nome} --> ${contaCorrenteAlice.saldo}`)

console.log(ContaCorrente.numeroDeContas)