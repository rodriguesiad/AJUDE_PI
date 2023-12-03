import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Atendimento } from "src/app/models/atendimento.model";
import { AtendimentoService } from "src/app/services/atendimento.service";

export const atendimentoResolver: ResolveFn<Atendimento> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(AtendimentoService).findById(route.paramMap.get('id')!);
    };
