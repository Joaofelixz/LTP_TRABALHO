export var StatusMeta;
(function (StatusMeta) {
    StatusMeta["PENDENTE"] = "Pendente";
    StatusMeta["CONCLUIDA"] = "Conclu\u00EDda";
})(StatusMeta || (StatusMeta = {}));
export class Meta {
    disciplina;
    horasSemana;
    status = StatusMeta.PENDENTE;
    constructor(disciplina, horasSemana) {
        this.disciplina = disciplina;
        this.horasSemana = horasSemana;
    }
    concluir() {
        this.status = StatusMeta.CONCLUIDA;
    }
    getStatus() {
        return this.status;
    }
}
//# sourceMappingURL=Metas.js.map