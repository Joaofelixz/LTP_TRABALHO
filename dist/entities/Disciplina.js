export class Disciplina {
    nome;
    cargaHoraria;
    progresso = 0;
    constructor(nome, cargaHoraria) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
    }
    atualizarProgresso(horas) {
        this.progresso += horas;
    }
    getProgresso() {
        return this.progresso;
    }
}
//# sourceMappingURL=Disciplina.js.map