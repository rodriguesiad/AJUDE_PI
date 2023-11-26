import { Atendimento } from "./atendimento.model";
import { Orgao } from "./orgao.model";
import { Usuario } from "./usuario.model";

export class Encaminhamento {
    id!:number;
    atendimento!: Atendimento;
    orgaoOrigem!: Orgao;
    orgaoDestino!: Orgao;
    motivo!: string;
    usuarioInclusao!: Usuario;
    perfilInclusao!: string;
    dataInclusao!: Date;
}
