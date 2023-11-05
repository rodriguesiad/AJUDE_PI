import { Estado } from "./estado.model";
import { Municipio } from "./municipio.model";

export class Beneficiario {
    id!: number;
    nome!: string;
    cpf!: string;
    rg!: string;
    nis!: string;
    telefone!: string;
    email!:string;
    dataNascimento!: Date;
    cpfDosPais!: string;
    cep!: string;
    estado!: Estado;
    municipio!: Municipio;
    bairro!: string;
    logradouro!: string;
    numero!: string;
    complemento!: string;
}