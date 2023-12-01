export class Estado {
    id!: number;
    descricao!: string;
    sigla!: string;

    constructor(id: number, descricao: string, sigla: string) {
        this.id = id;
        this.descricao = descricao;
        this.sigla = sigla;
    }
}
