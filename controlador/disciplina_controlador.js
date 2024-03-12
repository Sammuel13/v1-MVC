class DisciplinaControlador {

    constructor(alunoControlador) {
        this.servico = new DisciplinaService(alunoControlador.servico);
    }

    inserir() {
        const nomeElemento = document.querySelector("#nome");
        const codigoElemento = document.querySelector("#codigo");
        const disciplinaInserida = this.servico.inserir(codigoElemento.value, nomeElemento.value);

        const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Codigo: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDestino.appendChild(disciplinaElemento);
    }
}