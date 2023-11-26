import { Atendimento } from "./atendimento.model";
import { Usuario } from "./usuario.model";

export class Movimentacao {
    id!: number;
    atendimento!: Atendimento;
    descricao!: string;
    nomeDocumentos!: string[];
    usuarioInclusao!: Usuario;
    perfilInclusao!: string;
    dataInclusao!: Date;

    constructor(data: {
        id: number;
        atendimento: Atendimento;
        descricao: string;
        nomeDocumentos: string[];
        usuarioInclusao: Usuario;
        perfilInclusao: string;
        dataInclusao: Date;
    }) {
        this.id = data.id;
        this.atendimento = data.atendimento;
        this.descricao = data.descricao;
        this.nomeDocumentos = data.nomeDocumentos;
        this.usuarioInclusao = data.usuarioInclusao;
        this.perfilInclusao = data.perfilInclusao;
        this.dataInclusao = data.dataInclusao;
    }
}
