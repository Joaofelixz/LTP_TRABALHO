import { Disciplina } from "../entities/Disciplina";

export class GerenciadorDisciplinas {
  private disciplinas: Disciplina[] = [];

  public cadastrar(disciplina: Disciplina): void {
    this.disciplinas.push(disciplina);
  }

  public listar(): Disciplina[] {
    return this.disciplinas;
  }
}
