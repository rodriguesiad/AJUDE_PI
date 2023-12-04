import { PerfilOrgao } from "./perfil-orgao.model";

export class Usuario {
    id!: number;
    nome!: string;
    cpf!: string;
    login!: string;
    senha!: string;
    lotacoes!: PerfilOrgao[];
    ativo!: Boolean;
}