// Abstract class
export class Funcionario{
    constructor(nome, salario, cpf){
        if(this.constructor == Funcionario) {
            throw new Error(`Você não deveria instanciar um objeto do tipo "Funcionario" diretamente, pois essa é uma classe abstrata.`)
        }
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    // getters and setters
    get senha(){
        return this._senha
    }

    //method
    cadastrarSenha(senha){
        this._senha = senha;
    }
}