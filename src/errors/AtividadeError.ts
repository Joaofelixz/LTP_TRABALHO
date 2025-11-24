export class AtividadeError extends Error {
constructor(message: string) {
super(message);
this.name = "AtividadeError";
}
}

export class AtividadeNaoEncontradaError extends AtividadeError {
constructor(nome: string) {
super(`Atividade "${nome}" não encontrada`);
this.name = "AtividadeNaoEncontradaError";
}
}
