import { Conta } from "./conta.js";

export class ContaCorrente extends Conta{
    //estaticos
    static numeroDeContas = 0;

    //construtor
    constructor(cliente, agencia){
        super(0, cliente, agencia );
        ContaCorrente.numeroDeContas ++;
    }
}