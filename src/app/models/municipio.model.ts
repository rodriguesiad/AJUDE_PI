import { Estado } from "./estado.model";

export class Municipio {
    id!: number;
    nome!: string;
    estado!: Estado;

    constructor(id: number, nome: string, estado: Estado){
        this.id = id;
        this.nome = nome;
        this.estado = estado;
    }
}
