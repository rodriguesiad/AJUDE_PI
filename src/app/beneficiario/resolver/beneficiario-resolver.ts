import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Beneficiario } from "src/app/models/beneficiario.model";
import { BeneficiarioService } from "src/app/services/beneficiario.service";
import { inject } from "@angular/core";

export const beneficiarioResolver: ResolveFn<Beneficiario> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        return inject(BeneficiarioService).findById(route.paramMap.get('id')!);
    };