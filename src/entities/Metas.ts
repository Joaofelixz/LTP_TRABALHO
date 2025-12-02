import { Atividade } from "../entities/Atividade";
import { Disciplina } from "./Disciplina";

export enum StatusMeta {
  PENDENTE = "Pendente",
  CONCLUIDA = "Concluída",
}

export class Meta extends Atividade {
  private disciplina: Disciplina;
  private horasSemana: number;
  private status: StatusMeta = StatusMeta.PENDENTE;

  constructor(disciplina: Disciplina, horasSemana: number) {
    super(disciplina.getNome());
    this.disciplina = disciplina;
    this.horasSemana = horasSemana;
  }

  public getStatus(): StatusMeta {
    return this.status;
  }

  public concluir(): void {
    this.status = StatusMeta.CONCLUIDA;
  }

  public mostrarResumo(): void {
    console.log(
      `Meta da disciplina ${this.disciplina.getNome()}: ${this.horasSemana}h/semana - Status: ${this.status}`
    );
  }
}
