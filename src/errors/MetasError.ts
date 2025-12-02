export class MetaError {
  message: string;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.name = "MetaError";
  }
}

export class MetaNaoEncontradaError {
  message: string;
  name: string;

  constructor(nomeDisciplina: string) {
    this.message = `Meta da disciplina "${nomeDisciplina}" não encontrada`;
    this.name = "MetaNaoEncontradaError";
  }
}

export class MetaDuplicadaError {
  message: string;
  name: string;

  constructor(nomeDisciplina: string) {
    this.message = `Já existe uma meta cadastrada para "${nomeDisciplina}"`;
    this.name = "MetaDuplicadaError";
  }
}
