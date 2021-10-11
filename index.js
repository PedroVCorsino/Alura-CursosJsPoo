class Cliente {
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor) { 
        if(this.saldo >= valor){
            this.saldo -=valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11122233301;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;


const contaCorrenteAlice = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1002;



contaCorrenteRicardo.saldo = 1555;
contaCorrenteRicardo.sacar(50)
console.log(contaCorrenteRicardo.saldo);

