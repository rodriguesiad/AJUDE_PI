import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encaminhamento } from '../models/encaminhamento.model';

@Injectable({
  providedIn: 'root'
})
export class EncaminhamentoService {
  private baseURL: string = 'http://localhost:8080/encaminhamentos';
  private isCadastro: boolean = false;

  constructor(private http: HttpClient) { }

  getIsCadastro(): boolean {
    return this.isCadastro;
  }

  setIsCadastro(value: boolean) {
    this.isCadastro = value;
  }

  findByAtendimento(idAtendimento: string, pagina: number, tamanhoPagina: number): Observable<Encaminhamento[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }

    return this.http.get<Encaminhamento[]>(`${this.baseURL}/atendimento/${idAtendimento}`, { params });
  }

  findById(id: string): Observable<Encaminhamento> {
    return this.http.get<Encaminhamento>(`${this.baseURL}/${id}`);
  }

  count(idAtendimento: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/atendimento/${idAtendimento}/count`);
  }

  save(encaminhamento: Encaminhamento): Observable<Encaminhamento> {
    return this.http.post<Encaminhamento>(`${this.baseURL}`, encaminhamento);
  }
  
}