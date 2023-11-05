import { Estado } from "./estado.model";
import { Municipio } from "./municipio.model";

export class Beneficiario {
    id!: number;
    nome!: string;
    cpf!: string;
    rg!: string;
    nis!: string;
    telefone!: string;
    email!: string;
    dataNascimento!: Date;
    cpfDosPais!: string;
    cep!: string;
    estado!: Estado;
    municipio!: Municipio;
    bairro!: string;
    logradouro!: string;
    numero!: string;
    complemento!: string;

    constructor(data: {
        id: number;
        nome: string;
        cpf: string;
        nis: string;
        dataNascimento: Date;
        rg: string;
        telefone: string;
        email: string;
        cpfDosPais: string;
        cep: string;
        estado: Estado;
        municipio: Municipio;
        bairro: string;
        logradouro: string;
        numero: string;
        complemento: string;
    }) {
        this.id = data.id;
        this.nome = data.nome;
        this.cpf = data.cpf;
        this.nis = data.nis;
        this.dataNascimento = data.dataNascimento;
        this.rg = data.rg;
        this.telefone = data.telefone;
        this.email = data.email;
        this.cpfDosPais = data.cpfDosPais;
        this.cep = data.cep;
        this.estado = data.estado;
        this.municipio = data.municipio;
        this.bairro = data.bairro;
        this.logradouro = data.logradouro;
        this.numero = data.numero;
        this.complemento = data.complemento;
    }
}