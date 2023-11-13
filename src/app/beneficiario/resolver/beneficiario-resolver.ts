import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Beneficiario } from "src/app/models/beneficiario.model";
import { Estado } from "src/app/models/estado.model";
import { Municipio } from "src/app/models/municipio.model";

export const beneficiarioResolver: ResolveFn<Beneficiario> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const estado = new Estado(1, "Tocantins", "TO");
        const municipio = new Municipio(1, "Palmas", estado);
        
        return new Beneficiario({
            id: 1, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111',
            dataNascimento: new Date(1998, 9, 1), rg: '1111111', telefone: '63999889999',
            email: 'ana@gmail.com', cpfDosPais: 'Nenhum', cep: '8890-182',
            estado: estado, municipio: municipio, bairro: 'Aureny III',
            logradouro: 'Rua 8', numero: '20', complemento: ' '
        })
    };
