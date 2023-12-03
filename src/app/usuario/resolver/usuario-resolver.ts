import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Usuario } from "src/app/models/usuario.model";
import { UsuarioService } from "src/app/services/usuario.service";

export const usuarioResolver: ResolveFn<Usuario> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(UsuarioService).findWithLotacoesById(route.paramMap.get('id')!);
    };
