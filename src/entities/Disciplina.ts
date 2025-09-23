export class Disciplina {
  private progresso: number = 0;

  constructor(
    public nome: string,
    public cargaHoraria: number
  ) {}

  public atualizarProgresso(horas: number): void {
    this.progresso += horas;
  }

  public getProgresso(): number {
    return this.progresso;
  }
}
