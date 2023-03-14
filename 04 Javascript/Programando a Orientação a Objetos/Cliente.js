export class Cliente {
    nome;
    cpf;

    get cpf() {
        this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf
    }
}