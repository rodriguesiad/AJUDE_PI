import { Endereco } from "./endereco.model";
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
    endereco!: Endereco;


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
        endereco: Endereco;

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
        this.endereco = data.endereco;
    }
}