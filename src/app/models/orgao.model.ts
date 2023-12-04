import { Estado } from "./estado.model";
import { Municipio } from "./municipio.model";

export class Orgao {
    id!: number;
    nome!: string;
    sigla!: string;
    municipio!: Municipio;
    estado!: Estado;
    ativo!: boolean;

}