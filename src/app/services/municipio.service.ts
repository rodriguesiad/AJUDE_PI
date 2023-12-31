import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Municipio } from '../models/municipio.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  private baseURL: string = 'http://localhost:8080/municipios';
  constructor(private http: HttpClient) { }

  findAll(pagina: number, tamanhoPagina: number): Observable<Municipio[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }
    return this.http.get<Municipio[]>(`${this.baseURL}`, { params });
  }

  findById(id: string): Observable<Municipio> {
    return this.http.get<Municipio>(`${this.baseURL}/${id}`);
  }

  save(municipio: Municipio): Observable<Municipio> {
    return this.http.post<Municipio>(`${this.baseURL}`, municipio);
  }

  update(municipio: Municipio): Observable<Municipio> {
    return this.http.put<Municipio>(`${this.baseURL}/${municipio.id}`, municipio);
  }

  delete(municipio: Municipio): Observable<any> {
    return this.http.delete<Municipio>(`${this.baseURL}/${municipio.id}`);
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/count`);
  }

  countByNome(nome: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/search/${nome}/count`);
  }

}