import { Atendimento } from "./atendimento.model";
import { Orgao } from "./orgao.model";
import { Usuario } from "./usuario.model";

export class Encaminhamento {
    id!: number;
    atendimento!: Atendimento;
    orgaoAtual!: Orgao;
    orgaoDestino!: Orgao;
    motivo!: string;
    usuarioInclusao!: Usuario;
    descricao!: string;
}
