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
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }
}