import { Cliente } from "./cliente/cliente.js";
import { ContaCorrente } from "./conta/contaCorrente.js";
import { ContaPoupanca } from "./conta/contaPoupanca.js";
import { ContaSalario } from "./conta/contaSalario.js";

const cliente1 = new Cliente("Ricardo",11122233301);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(200);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)


const teste = new ContaSalario(0, cliente1, 1003);

teste.sacar(50);