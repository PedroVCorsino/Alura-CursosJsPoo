export class ContaCorrente{
    agencia;
    #saldo = 0; // O "#" torna esse atributo privado. 

    sacar(valor) { 
        if(this.#saldo < valor) return; 
        
        this.#saldo -=valor;
        return valor;
    }

    depositar(valor) {
        if (valor <= 0) return
        
        this.#saldo +=valor;
        return valor;

    }

    getSaldo(){
        return this.#saldo;
    }
}