import { Meta } from "../entities/Metas.js";

export class GerenciadorMetas {
  private metas: Meta[] = [];

  public cadastrar(meta: Meta): void {
    this.metas.push(meta);
  }

  public listar(): Meta[] {
    return this.metas;
  }

  public concluirMeta(index: number): void {
    if (this.metas[index]) {
      this.metas[index].concluir();
    }
  }
}
