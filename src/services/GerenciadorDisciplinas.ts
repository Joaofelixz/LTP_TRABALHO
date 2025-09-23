import { Disciplina } from "../entities/Disciplina.js";

export class GerenciadorDisciplinas {
  private disciplinas: Disciplina[] = [];

  public cadastrar(disciplina: Disciplina): void {
    this.disciplinas.push(disciplina);
  }

  public listar(): Disciplina[] {
    return this.disciplinas;
  }

  public excluir(nome: string): void {
    this.disciplinas = this.disciplinas.filter(d => d.nome !== nome);
  }
}
