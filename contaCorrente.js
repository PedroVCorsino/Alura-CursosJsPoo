export class ContaCorrente{
    agencia;
    cliente;

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

    trasferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    getSaldo(){
        return this.#saldo;
    }
}