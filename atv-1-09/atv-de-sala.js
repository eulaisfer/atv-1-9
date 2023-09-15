class Pessoa { // Pai
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
    falar() {
        console.log(`${this.nome} está falando`);
    }
    andar() {
        console.log(`${this.nome} está andando`);
    }
}

class PessoaFisica extends Pessoa { //1 Filho
    constructor(nome, telefone, email, cpf) {
        super(nome, telefone, email);
        this.cpf = cpf;
    }
}
class PessoaJuridica extends Pessoa { // 2Filho
    constructor(nome, telefone, email, cnpj) {
        super(nome, telefone, email);
        this.cnpj = cnpj;
    }

    // exemplo 1
    pagarSalarios() {
        console.log(`${this.nome} pagou os salários`);
    }
    //exemplo 2
    pagarSalarios() {
        super.andar();
        console.log(`${this.nome} pagou os salários`);
    }

}
let pessoa1 = new PessoaFisica("alex", "123456",
    "alex@alex.com", "123456");
pessoa1.andar();
console.log(pessoa1.nome, pessoa1.cpf);
let pessoa2 = new PessoaJuridica("josefa", "654312",
    "josefa@josefa.com", "654312");
pessoa2.andar();
pessoa2.pagarSalarios();