import { Disciplina } from "./entities/Disciplina.js";
import { Meta, StatusMeta } from "./entities/Metas.js";
import { GerenciadorDisciplinas } from "./services/GerenciadorDisciplinas.js";
import { GerenciadorMetas } from "./services/GerenciadorMetas.js";

// Criando gerenciadores
const gerenciadorDisciplinas = new GerenciadorDisciplinas();
const gerenciadorMetas = new GerenciadorMetas();

// Criando disciplinas
const matematica = new Disciplina("Matemática", 60);
const portugues = new Disciplina("Português", 40);

gerenciadorDisciplinas.cadastrar(matematica);
gerenciadorDisciplinas.cadastrar(portugues);

// Criando metas
const meta1 = new Meta(matematica, 5);
const meta2 = new Meta(portugues, 3);

gerenciadorMetas.cadastrar(meta1);
gerenciadorMetas.cadastrar(meta2);

// Listando
console.log("📚 Disciplinas cadastradas:", gerenciadorDisciplinas.listar());
console.log("🎯 Metas criadas:", gerenciadorMetas.listar());

// Concluir uma meta
gerenciadorMetas.concluirMeta(0);
console.log("✅ Status da primeira meta:", meta1.getStatus());
