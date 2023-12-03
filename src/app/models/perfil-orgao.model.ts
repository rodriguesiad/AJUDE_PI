import { Orgao } from "./orgao.model";
import { Perfil } from "./perfil.model";

export class PerfilOrgao {
    id!: number;
    perfil!: Perfil;
    orgao!: Orgao;
}