import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beneficiario } from '../models/beneficiario.model';
import { Endereco } from '../models/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {
  private baseURL: string =  'http://localhost:8080/beneficiarios';
  constructor(private http: HttpClient) {}

  findByid(id : string):Observable<Beneficiario>{
    return this.http.get<Beneficiario>(`${this.baseURL}/${id}`);
  }

  save(beneficiario: Beneficiario): Observable<Beneficiario>{

    console.log(beneficiario);
    const end={
      idMunicipio: beneficiario.endereco.municipio,
      bairro: beneficiario.endereco.bairro,
      logradouro: beneficiario.endereco.logradouro,
      numero: beneficiario.endereco.numero,
      complemento: beneficiario.endereco.complemento,
      cep: beneficiario.endereco.cep
    }

    const entity ={
      nome: beneficiario.nome,
      cpf: beneficiario.cpf,
      rg: beneficiario.rg,
      nis: beneficiario.nis,
      telefone: beneficiario.telefone,
      email: beneficiario.email,
      cpfPai: beneficiario.cpfDosPais,
      dataNascimento: beneficiario.dataNascimento,
      endereco: end
    }

    return this.http.post<Beneficiario>(`${this.baseURL}`, entity);
  }

  update(beneficiario: Beneficiario): Observable<Beneficiario> {
    return this.http.put<Beneficiario>(`${this.baseURL}/${beneficiario.id}`, beneficiario);
  }
  
  delete(beneficiario: Beneficiario): Observable<any> {
    return this.http.delete<Beneficiario>(`${this.baseURL}/${beneficiario.id}`);
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/count`);
  }

  findAll(pagina: number, tamanhoPagina: number): Observable<Beneficiario[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }

    return this.http.get<Beneficiario[]>(`${this.baseURL}`, { params });
  }

  findByNomeOuCPF(nomeOuCpf: string, pagina: number, tamanhoPagina: number): Observable<Beneficiario[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }
    return this.http.get<Beneficiario[]>(`${this.baseURL}/search/${nomeOuCpf}`, { params });
  }
}