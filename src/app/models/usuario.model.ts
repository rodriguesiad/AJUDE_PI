import { PerfilOrgao } from "./perfil-orgao.model";

export class Usuario {
    id!: number;
    nome!: string;
    cpf!: string;
    email!: string;
    senha!: string;
    lotacoes!: PerfilOrgao[];
    ativo!: Boolean;

    constructor(data: {
        id: number,
        nome: string,
        cpf: string,
        email: string,
        senha: string,
        lotacoes: PerfilOrgao[],
    }) {
        this.id = data.id;
        this.nome = data.nome;
        this.cpf = data.cpf;
        this.email = data.email;
        this.senha = data.senha;
        this.lotacoes = data.lotacoes;
    }
}