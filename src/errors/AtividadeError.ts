export class AtividadeError {
  message: string;
  name: string;

  constructor(message: string) {
    this.message = message;
    this.name = "AtividadeError";
  }
}

export class AtividadeNaoEncontradaError {
  message: string;
  name: string;

  constructor(nome: string) {
    this.message = `Atividade "${nome}" não encontrada`;
    this.name = "AtividadeNaoEncontradaError";
  }
}
