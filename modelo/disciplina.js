class Disciplina {

    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
        this.alunos = [];
    }

    get nome() {
        return this.nome;
    }

    set nome(novoNome){
        this.nome = novoNome;
    }

    get alunos() {
        return this.alunos;
    }

    get codigo() {
        return this.codigo;
    }

    set codigo(cod) {
        this.codigo = cod;
    }

    inserirAluno(aluno) {
        this.alunos.push(aluno);
    }

}