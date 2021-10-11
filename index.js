class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
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

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(50)

console.log(contaCorrenteRicardo.getSaldo())