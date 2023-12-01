import { Estado } from "./estado.model";

export class Municipio {
    id!: number;
    descricao!: string;
    estado!: Estado;

    constructor(id: number, descricao: string, estado: Estado) {
        this.id = id;
        this.descricao = descricao;
        this.estado = estado;
    }
}
