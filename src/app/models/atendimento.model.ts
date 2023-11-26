import { Beneficiario } from "./beneficiario.model";
import { Orgao } from "./orgao.model";
import { Usuario } from "./usuario.model";

export class Atendimento {
    id!: number;
    orgaoAtual!: Orgao;
    beneficiario!: Beneficiario;
    dataInclusao!: Date;
    usuarioInclusao!: Usuario;
    perfilInclusao!: string;
    situacao!: boolean;
}