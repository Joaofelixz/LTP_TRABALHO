export class DisciplinaError extends Error {
constructor(message: string) {
super(message);
this.name = "DisciplinaError";
}
}

export class DisciplinaNaoEncontradaError extends DisciplinaError {
constructor(nome: string) {
super(`Disciplina "${nome}" não encontrada`);
this.name = "DisciplinaNaoEncontradaError";
}
}

export class DisciplinaJaExisteError extends DisciplinaError {
constructor(nome: string) {
super(`A disciplina "${nome}" já está cadastrada`);
this.name = "DisciplinaJaExisteError";
}
}
