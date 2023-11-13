import { PerfilOrgao } from "./perfil-orgao.model";

export class Usuario {
    id!: number;
    nome!: string;
    cpf!: string;
    email!: string;
    senha!: string;
    perfisOrgao!: PerfilOrgao[];

    constructor(data: {
        id: number,
        nome: string,
        cpf: string,
        email: string,
        senha: string,
        perfisOrgao: PerfilOrgao[],
    }) {
        this.id = data.id;
        this.nome = data.nome;
        this.cpf = data.cpf;
        this.email = data.email;
        this.senha = data.senha;
        this.perfisOrgao = data.perfisOrgao;
    }
}