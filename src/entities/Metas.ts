import { Disciplina } from "./Disciplina.js";

export enum StatusMeta {
  PENDENTE = "Pendente",
  CONCLUIDA = "Concluída",
}

export class Meta {
  private status: StatusMeta = StatusMeta.PENDENTE;

  constructor(
    public disciplina: Disciplina,
    public horasSemana: number
  ) {}

  public concluir(): void {
    this.status = StatusMeta.CONCLUIDA;
  }

  public getStatus(): StatusMeta {
    return this.status;
  }
}
