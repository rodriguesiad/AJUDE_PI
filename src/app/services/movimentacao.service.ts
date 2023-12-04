import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimentacao } from '../models/movimentacao.model';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  private baseURL: string = 'http://localhost:8080/movimentacoes';

  constructor(private http: HttpClient) { }

  private isCadastro: boolean = false;

  getIsCadastro(): boolean {
    return this.isCadastro;
  }

  setIsCadastro(value: boolean) {
    this.isCadastro = value;
  }

  findByAtendimento(idAtendimento: string, pagina: number, tamanhoPagina: number): Observable<Movimentacao[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }

    return this.http.get<Movimentacao[]>(`${this.baseURL}/atendimento/${idAtendimento}`, { params });
  }

  findById(id: string): Observable<Movimentacao> {
    return this.http.get<Movimentacao>(`${this.baseURL}/${id}`);
  }

  count(idAtendimento: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/atendimento/${idAtendimento}/count`);
  }

  save(movimentacao: Movimentacao): Observable<Movimentacao> {
    return this.http.post<Movimentacao>(`${this.baseURL}`, movimentacao);
  }

  uploadDocumento(id: number, documento: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('id', id.toString());
    formData.append('nomeDocumento', documento.name);
    formData.append('documento', documento, documento.name);

    return this.http.patch<Movimentacao>(`${this.baseURL}/documento/upload`, formData);
  }

  getUrlDocumento(nomeDocumento: string): string {
    return `${this.baseURL}/documento/download/${nomeDocumento}`;
  }

}