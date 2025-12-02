export class DisciplinaError {
  message: string;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.name = "DisciplinaError";
  }
}

export class DisciplinaNaoEncontradaError {
  message: string;
  name: string;

  constructor(nome: string) {
    this.message = `Disciplina "${nome}" não encontrada`;
    this.name = "DisciplinaNaoEncontradaError";
  }
}

export class DisciplinaJaExisteError {
  message: string;
  name: string;

  constructor(nome: string) {
    this.message = `A disciplina "${nome}" já está cadastrada`;
    this.name = "DisciplinaJaExisteError";
  }
}
