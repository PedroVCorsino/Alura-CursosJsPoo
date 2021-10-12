export class Cliente {
    //privados
    #nome;
    get nome() {
        return this.#nome
    }

    #cpf;
    get cpf() {
        return this.#cpf;
    }

    //construtor
    constructor(nome, cpf) {
        this.#nome = nome;
        this.#cpf = cpf;
    }
}