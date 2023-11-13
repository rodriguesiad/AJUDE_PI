import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Estado } from "src/app/models/estado.model";
import { Municipio } from "src/app/models/municipio.model";
import { Orgao } from "src/app/models/orgao.model";
import { Usuario } from "src/app/models/usuario.model";

export const usuarioResolver: ResolveFn<Usuario> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const estado = new Estado(1, "Tocantins", "TO");
        const municipio = new Municipio(1, "Palmas", estado);
        const perfil = { value: 1, label: 'Administrador' };
        const cras = new Orgao({ id: 2, nome: 'Centro de Referência de Assistência Social', sigla: 'CRAS', municipio: municipio, estado: estado },);
        const creas = new Orgao({ id: 3, nome: 'Centro de Ref. Especializado de Ass. Social', sigla: 'CREAS', municipio: municipio, estado: estado },);

        return new Usuario({
            id: 1, nome: 'Maria de Souza',
            cpf: '474.112.440-15',
            email: 'maria@gmail.com',
            senha: '123',
            perfisOrgao: [{ perfil: perfil, orgao: cras }, { perfil: perfil, orgao: creas }]
        })
    };
