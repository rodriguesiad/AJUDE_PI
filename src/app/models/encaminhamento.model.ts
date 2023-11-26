import { Atendimento } from "./atendimento.model";
import { Orgao } from "./orgao.model";
import { Usuario } from "./usuario.model";

export class Encaminhamento {
    id!: number;
    atendimento!: Atendimento;
    orgaoOrigem!: Orgao;
    orgaoDestino!: Orgao;
    motivo!: string;
    usuarioInclusao!: Usuario;
    perfilInclusao!: string;
    dataInclusao!: Date;

    constructor(data: {
        id: number;
        atendimento: Atendimento;
        orgaoOrigem: Orgao;
        orgaoDestino: Orgao;
        motivo: string;
        usuarioInclusao: Usuario;
        perfilInclusao: string;
        dataInclusao: Date;
    }) {
        this.id = data.id;
        this.atendimento = data.atendimento;
        this.orgaoOrigem = data.orgaoOrigem;
        this.orgaoDestino = data.orgaoDestino;
        this.motivo = data.motivo;
        this.usuarioInclusao = data.usuarioInclusao;
        this.perfilInclusao = data.perfilInclusao;
        this.dataInclusao = data.dataInclusao;
    }
}
