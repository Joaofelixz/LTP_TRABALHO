import { Disciplina } from "../entities/Disciplina";
import { DisciplinaJaExisteError } from "../errors/DisciplinaError";

export class GerenciadorDisciplinas {
  private disciplinas: Disciplina[] = [];

  public cadastrar(disciplina: Disciplina): void {
     const existe = this.disciplinas.some(
      d => d.getNome().toLowerCase() === disciplina.getNome().toLowerCase()
    );

    if (existe) {
     throw new DisciplinaJaExisteError(disciplina.getNome());
    }
    this.disciplinas.push(disciplina);
}

  public listar(): Disciplina[] {
    return this.disciplinas;
  }
}