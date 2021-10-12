import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233301;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.cliente = cliente1
contaCorrenteRicardo.agencia = 1001;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11122233302;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = cliente2
contaCorrenteAlice.agencia = 1002;


contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.trasferir(200, contaCorrenteAlice);

console.log(`${contaCorrenteRicardo.cliente.nome} --> ${contaCorrenteRicardo.saldo}`)
//console.log(`${contaCorrenteAlice.cliente.nome} --> ${contaCorrenteAlice.getSaldo()}`)
