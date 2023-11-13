import { Orgao } from "./orgao.model";

export class PerfilOrgao {
    perfil!: string;
    orgao!: Orgao;

    constructor(data: {
        perfil: string,
        orgao: Orgao
    }) {
        this.perfil = data.perfil;
        this.orgao = data.orgao;
    }
}