import { Injectable } from '@angular/core';
import { Orgao } from '../models/orgao.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrgaoService {
  private baseURL: string = 'http://localhost:8080/orgaos';

  constructor(private http: HttpClient) { }

  findById(id: string): Observable<Orgao> {
    return this.http.get<Orgao>(`${this.baseURL}/${id}`);
  }

  findAll(pagina: number, tamanhoPagina: number): Observable<Orgao[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }

    return this.http.get<Orgao[]>(`${this.baseURL}`, { params });
  }

  save(orgao: Orgao): Observable<Orgao> {
    const orgaoRequest = {
      nome: orgao.nome.toString(),
      sigla: orgao.sigla.toString().toLowerCase(),
      idMunicipio: orgao.municipio.id.toString()
    }

    return this.http.post<Orgao>(`${this.baseURL}`, orgaoRequest);
  }

  update(orgao: Orgao): Observable<Orgao> {
    return this.http.put<Orgao>(`${this.baseURL}/${orgao.id}`, orgao);
  }

  delete(orgao: Orgao): Observable<any> {
    return this.http.delete<Orgao>(`${this.baseURL}/${orgao.id}`);
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/count`);
  }

  countByNomeOuSigla(nome: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/search/${nome}/count`);
  }

  findByNomeOuSigla(nomeOuSigla: string, pagina: number, tamanhoPagina: number): Observable<Orgao[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }
    return this.http.get<Orgao[]>(`${this.baseURL}/search/${nomeOuSigla}`, { params });
  }

  alterarSituacao(id: number, situacao: boolean): Observable<Orgao> {
    return this.http.put<Orgao>(`${this.baseURL}/situacao/${id}`, situacao);
  }

}