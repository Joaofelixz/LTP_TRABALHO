import { Disciplina } from "./entities/Disciplina.js";
import { Meta, StatusMeta } from "./entities/Metas.js";
import { GerenciadorDisciplinas } from "./services/GerenciadorDisciplinas.js";
import { GerenciadorMetas } from "./services/GerenciadorMetas.js";

const gerenciadorDisciplinas = new GerenciadorDisciplinas();
const gerenciadorMetas = new GerenciadorMetas();


const matematica = new Disciplina("Matemática", 60);
const portugues = new Disciplina("Português", 40);
const historia = new Disciplina("historia", 70);

gerenciadorDisciplinas.cadastrar(matematica);
gerenciadorDisciplinas.cadastrar(portugues);
gerenciadorDisciplinas.cadastrar(historia);


const meta1 = new Meta(matematica, 5);
const meta2 = new Meta(portugues, 3);
const meta3 = new Meta(historia, 8);

gerenciadorMetas.cadastrar(meta1);
gerenciadorMetas.cadastrar(meta2);
gerenciadorMetas.cadastrar(meta3);


console.log(" Disciplinas cadastradas:", gerenciadorDisciplinas.listar());
console.log("Metas criadas:", gerenciadorMetas.listar());

gerenciadorMetas.concluirMeta(0);
console.log("Status da primeira meta:", meta1.getStatus());
