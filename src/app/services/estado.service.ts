import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from '../models/estado.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private baseURL: string = 'http://localhost:8080/estados';
  constructor(private http: HttpClient) { }

  save(estado: Estado): Observable<Estado> {
    return this.http.post<Estado>(`${this.baseURL}`, estado);
  }

  update(estado: Estado): Observable<Estado> {
    return this.http.put<Estado>(`${this.baseURL}/${estado.id}`, estado);
  }

  delete(estado: Estado): Observable<any> {
    return this.http.delete<Estado>(`${this.baseURL}/${estado.id}`);
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/count`);
  }

  countByNome(nome: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/search/${nome}/count`);
  }


}