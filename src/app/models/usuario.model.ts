import { PerfilOrgao } from "./perfil-orgao.model";

export class Usuario {
    id!: number;
    nome!: string;
    cpf!: string;
    login!: string;
    senha!: string;
    lotacoes!: PerfilOrgao[];
    ativo!: Boolean;

    constructor(data: {
        id: number,
        nome: string,
        cpf: string,
        login: string,
        senha: string,
        lotacoes: PerfilOrgao[],
    }) {
        this.id = data.id;
        this.nome = data.nome;
        this.cpf = data.cpf;
        this.login = data.login;
        this.senha = data.senha;
        this.lotacoes = data.lotacoes;
    }
}