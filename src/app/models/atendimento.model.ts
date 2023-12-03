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

    constructor(data: {
        id: number,
        orgao: Orgao,
        beneficiario: Beneficiario,
        tipoBeneficio: string,
        descricao: string,
        dataCadastro: Date,
        usuarioInclusao: Usuario,
        situacao: SituacaoAtendimento
    }) {
        this.id = data.id;
        this.orgao = data.orgao;
        this.beneficiario = data.beneficiario;
        this.tipoBeneficio = data.tipoBeneficio;
        this.descricao = data.descricao;
        this.dataCadastro = data.dataCadastro;
        this.usuarioInclusao = data.usuarioInclusao;
        this.situacao = data.situacao
    }
}