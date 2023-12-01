import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Orgao } from "src/app/models/orgao.model";
import { OrgaoService } from "src/app/services/orgao.service";

export const orgaoResolver: ResolveFn<Orgao> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(OrgaoService).findById(route.paramMap.get('id')!);
    };
