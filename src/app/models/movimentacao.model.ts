import { Atendimento } from "./atendimento.model";
import { Usuario } from "./usuario.model";

export class Movimentacao {
    id!: number;
    atendimento!: Atendimento;
    titulo!: string;
    descricao!: string;
    nomeDocumento!: string;
    usuarioAutor!: Usuario;
    dataInclusao!: Date;

    constructor(data: {
        id: number;
        atendimento: Atendimento;
        titulo: string;
        descricao: string;
        nomeDocumento: string;
        usuarioAutor: Usuario;
        dataInclusao: Date;
    }) {
        this.id = data.id;
        this.atendimento = data.atendimento;
        this.titulo = data.titulo;
        this.descricao = data.descricao;
        this.nomeDocumento = data.nomeDocumento;
        this.usuarioAutor = data.usuarioAutor;
        this.dataInclusao = data.dataInclusao;
    }
}
