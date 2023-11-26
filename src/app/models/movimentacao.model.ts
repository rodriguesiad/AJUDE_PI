import { Atendimento } from "./atendimento.model";
import { Usuario } from "./usuario.model";

export class Movimentacao {
    id!:number;
    atendimento!: Atendimento;
    descricao!: string;
    nomeDocumentos!: string [];
    usuarioInclusao!: Usuario;
    perfilInclusao!: string;
    dataInclusao!: Date;
}
