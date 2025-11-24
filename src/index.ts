import { Disciplina } from "./entities/Disciplina";
import { Meta } from "./entities/Metas";
import { GerenciadorDisciplinas } from "./services/GerenciadorDisciplinas";
import { GerenciadorMetas } from "./services/GerenciadorMetas";
import { DisciplinaJaExisteError } from "./errors/DisciplinaError";
import { MetaNaoEncontradaError } from "./errors/MetasError";

const gerenciadorDisciplinas = new GerenciadorDisciplinas();
const gerenciadorMetas = new GerenciadorMetas();

const matematica = new Disciplina("Matemática", 60);
const portugues = new Disciplina("Português", 40);
const historia = new Disciplina("História", 70);
const fisica = new Disciplina("Física", 20);

gerenciadorDisciplinas.cadastrar(matematica);
gerenciadorDisciplinas.cadastrar(portugues);
gerenciadorDisciplinas.cadastrar(historia);
gerenciadorDisciplinas.cadastrar(fisica);

const meta1 = new Meta(matematica, 5);
const meta2 = new Meta(portugues, 3);
const meta3 = new Meta(historia, 8);
const meta4 = new Meta(fisica, 2);

gerenciadorMetas.cadastrar(meta1);
gerenciadorMetas.cadastrar(meta2);
gerenciadorMetas.cadastrar(meta3);
gerenciadorMetas.cadastrar(meta4);

console.log("Disciplinas cadastradas:");
console.log(gerenciadorDisciplinas.listar());

console.log("Metas cadastradas:");
console.log(gerenciadorMetas.listar());

try {
gerenciadorDisciplinas.cadastrar(new Disciplina("Matemática", 60));
} catch (error: any) {
console.log("\nErro capturado:", error.message);
}

try {
gerenciadorMetas.buscar("Química");
} catch (error: any) {
console.log("Erro capturado:", error.message);
}
