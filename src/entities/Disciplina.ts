import { Atividade } from "../entities/Atividade";

export class Disciplina extends Atividade {
  private cargaHoraria: number;

  constructor(nome: string, cargaHoraria: number) {
    super(nome); // herdando nome de Atividade
    this.cargaHoraria = cargaHoraria;
  }

  public getCargaHoraria(): number {
    return this.cargaHoraria;
  }

  public setCargaHoraria(valor: number): void {
    this.cargaHoraria = valor;
  }
}
