import { Disciplina } from "./Disciplina.js";
export declare enum StatusMeta {
    PENDENTE = "Pendente",
    CONCLUIDA = "Conclu\u00EDda"
}
export declare class Meta {
    disciplina: Disciplina;
    horasSemana: number;
    private status;
    constructor(disciplina: Disciplina, horasSemana: number);
    concluir(): void;
    getStatus(): StatusMeta;
}
//# sourceMappingURL=Metas.d.ts.map