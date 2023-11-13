import { Orgao } from "./orgao.model";

export class PerfilOrgao {
    perfil!: {value : number, label: string};
    orgao!: Orgao;

    constructor(data: {
        perfil: {value : number, label: string},
        orgao: Orgao
    }) {
        this.perfil = data.perfil;
        this.orgao = data.orgao;
    }
}