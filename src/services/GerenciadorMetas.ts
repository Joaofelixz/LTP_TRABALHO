import { Meta } from "../entities/Metas";
import { MetaNaoEncontradaError } from "../errors/MetasError";

export class GerenciadorMetas {
private metas: Meta[] = [];

public cadastrar(meta: Meta): void {
this.metas.push(meta);
}

public listar(): Meta[] {
return this.metas;
}

public buscar(nomeDisciplina: string): Meta {
const meta = this.metas.find(
(m) => m.getNome().toLowerCase() === nomeDisciplina.toLowerCase()
);

if (!meta) {
  throw new MetaNaoEncontradaError(nomeDisciplina);
}

return meta;

}
}