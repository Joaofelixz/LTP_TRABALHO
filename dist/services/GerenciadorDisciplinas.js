export class GerenciadorDisciplinas {
    disciplinas = [];
    cadastrar(disciplina) {
        this.disciplinas.push(disciplina);
    }
    listar() {
        return this.disciplinas;
    }
    excluir(nome) {
        this.disciplinas = this.disciplinas.filter(d => d.nome !== nome);
    }
}
//# sourceMappingURL=GerenciadorDisciplinas.js.map