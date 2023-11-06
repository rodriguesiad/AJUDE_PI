import { Estado } from "./estado.model";
import { Municipio } from "./municipio.model";

export class Orgao {
    id!: number;
    nome!: string;
    sigla!: string;
    municipio!: Municipio;
    estado!: Estado;
   
    constructor(data: {
        id: number;
        nome: string;
        sigla: string;
        municipio: Municipio;
        estado: Estado;
       
    }) {
        this.id = data.id;
        this.nome = data.nome;
        this.sigla = data.sigla
        this.municipio = data.municipio;
        this.estado = data.estado;
    }
}