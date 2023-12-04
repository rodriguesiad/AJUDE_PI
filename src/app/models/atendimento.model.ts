import { Beneficiario } from "./beneficiario.model";
import { Orgao } from "./orgao.model";
import { SituacaoAtendimento } from "./situacao-atendimento.model";
import { Usuario } from "./usuario.model";

export class Atendimento {
    id!: number;
    orgao!: Orgao;
    beneficiario!: Beneficiario;
    tipoBeneficio!: string;
    descricao!: string;
    dataCadastro!: Date;
    usuarioInclusao!: Usuario;
    situacao!: SituacaoAtendimento;
}