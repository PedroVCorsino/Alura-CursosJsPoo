import { Conta } from "./conta.js";

export class ContaCorrente extends Conta{
    //estaticos
    static numeroDeContas = 0;

    //construtor
    constructor(cliente, agencia){
        super(0, cliente, agencia );
        ContaCorrente.numeroDeContas ++;
    }

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}