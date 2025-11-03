import { Meta } from "../entities/Metas";

export class GerenciadorMetas {
  private metas: Meta[] = [];

  public cadastrar(meta: Meta): void {
    this.metas.push(meta);
  }

  public listar(): Meta[] {
    return this.metas;
  }
}
