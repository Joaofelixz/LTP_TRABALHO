export class Atividade {
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  public getNome(): string {
    return this.nome;
  }

  public mostrarResumo(): void {
    console.log(`Atividade: ${this.nome}`);
  }
}
