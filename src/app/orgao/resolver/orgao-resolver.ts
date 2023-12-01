import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Estado } from "src/app/models/estado.model";
import { Municipio } from "src/app/models/municipio.model";
import { Orgao } from "src/app/models/orgao.model";

export const orgaoResolver: ResolveFn<Orgao> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const estado = new Estado(1, "Tocantins", "TO");
        const municipio = new Municipio(1, "Palmas", estado);
        
        return new Orgao({id: 1, nome: 'Sec. Municipal de Deseenvolvimento Social',
         sigla:'SEDES', municipio: municipio, estado: estado, ativo: true
        })
    };
