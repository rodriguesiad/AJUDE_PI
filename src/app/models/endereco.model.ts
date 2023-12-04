import { Estado } from "./estado.model";
import { Municipio } from "./municipio.model";

export class Endereco {
    estado!: Estado;
    municipio!: Municipio;
    bairro!: string;
    logradouro!: string;
    numero!: string;
    complemento!: string;
    cep!: string;
}