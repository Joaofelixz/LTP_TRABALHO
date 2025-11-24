export class MetaError extends Error {
constructor(message: string) {
super(message);
this.name = "MetasError";
}
}

export class MetaNaoEncontradaError extends MetaError {
constructor(nomeDisciplina: string) {
super(`Meta da disciplina "${nomeDisciplina}" não encontrada`);
this.name = "MetaNaoEncontradaError";
}
}

export class MetaDuplicadaError extends MetaError {
constructor(nomeDisciplina: string) {
super(`Já existe uma meta cadastrada para "${nomeDisciplina}"`);
this.name = "MetaDuplicadaError";
}
}
