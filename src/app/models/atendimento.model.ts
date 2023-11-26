import { Beneficiario } from "./beneficiario.model";
import { Orgao } from "./orgao.model";
import { Usuario } from "./usuario.model";

export class Atendimento {
    id!: number;
    orgaoAtual!: Orgao;
    beneficiario!: Beneficiario;
    tipoBeneficio!: string;
    descricao!: string;
    dataInclusao!: Date;
    usuarioInclusao!: Usuario;
    perfilInclusao!: string;
    situacao!: boolean;

    constructor(data: {
        id: number,
        orgaoAtual: Orgao,
        beneficiario: Beneficiario,
        tipoBeneficio: string,
        descricao: string,
        dataInclusao: Date,
        usuarioInclusao: Usuario,
        perfilInclusao: string,
        situacao: boolean
    }) {
        this.id = data.id;
        this.orgaoAtual = data.orgaoAtual;
        this.beneficiario = data.beneficiario;
        this.tipoBeneficio = data.tipoBeneficio;
        this.descricao = data.descricao;
        this.dataInclusao = data.dataInclusao;
        this.usuarioInclusao = data.usuarioInclusao;
        this.perfilInclusao = data.perfilInclusao;
        this.situacao = data.situacao;
    }
}