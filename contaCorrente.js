import { Cliente } from "./cliente.js";

export class ContaCorrente{
    //Publicos
    agencia;

    //Privados
    #cliente;
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.#cliente = novoValor
        }
    }
    get cliente(){
        return this.#cliente
    }

    #saldo = 0; // O "#" torna esse atributo privado. 
    get saldo(){
        return this.#saldo;
    }

    //Metodos
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


}