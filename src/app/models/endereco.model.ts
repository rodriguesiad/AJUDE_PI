import { Estado } from "./estado.model";
import { Municipio } from "./municipio.model";

export class Endereco {

    estado!: Estado;
    municipio!: Municipio;
    bairro!: string;
    logradouro!: string;
    numero!: string;
    complemento!: string;
    cep!: string;

    constructor(
        estado: Estado,
        municipio: Municipio,
        bairro: string,
        logradouro: string,
        numero: string,
        complemento: string,
        cep: string
      ) {
        this.estado = estado;
        this.municipio = municipio;
        this.bairro = bairro;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cep = cep;
      }
}