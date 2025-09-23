export class GerenciadorMetas {
    metas = [];
    cadastrar(meta) {
        this.metas.push(meta);
    }
    listar() {
        return this.metas;
    }
    concluirMeta(index) {
        if (this.metas[index]) {
            this.metas[index].concluir();
        }
    }
}
//# sourceMappingURL=GerenciadorMetas.js.map