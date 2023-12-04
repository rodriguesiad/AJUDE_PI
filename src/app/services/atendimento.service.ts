import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atendimento } from '../models/atendimento.model';
import { SituacaoAtendimento } from '../models/situacao-atendimento.model';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  private baseURL: string = 'http://localhost:8080/atendimentos';
  private atendimentoSelecionado: Atendimento | undefined;

  constructor(private http: HttpClient) { }

  setAtendimento(atendimento: Atendimento): void {
    this.atendimentoSelecionado = atendimento;
  }

  getAtendimento(): Atendimento | undefined {
    return this.atendimentoSelecionado;
  }

  findById(id: string): Observable<Atendimento> {
    return this.http.get<Atendimento>(`${this.baseURL}/${id}`);
  }

  findByBeneficiario(idBeneficiario: string, pagina: number, tamanhoPagina: number): Observable<Atendimento[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }

    return this.http.get<Atendimento[]>(`${this.baseURL}/beneficiario/${idBeneficiario}`, { params });
  }

  save(atendimento: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(`${this.baseURL}`, atendimento);
  }

  update(atendimento: Atendimento): Observable<Atendimento> {
    return this.http.put<Atendimento>(`${this.baseURL}/${atendimento.id}`, atendimento);
  }

  count(idBeneficiario: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/beneficiario/${idBeneficiario}/count`);
  }

  findSituacoesAtendimento(): Observable<SituacaoAtendimento[]> {
    return this.http.get<SituacaoAtendimento[]>(`${this.baseURL}/situacoes-atendimento`);
  }

}