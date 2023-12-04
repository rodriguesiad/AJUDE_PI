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
}
