import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL: string = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  findById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseURL}/${id}`);
  }

  findAll(pagina: number, tamanhoPagina: number): Observable<Usuario[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }

    return this.http.get<Usuario[]>(`${this.baseURL}`, { params });
  }

  save(usuario: Usuario): Observable<Usuario> {
    const usuarioRequest = {}

    return this.http.post<Usuario>(`${this.baseURL}`, usuarioRequest);
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseURL}/${usuario.id}`, usuario);
  }

  delete(usuario: Usuario): Observable<any> {
    return this.http.delete<Usuario>(`${this.baseURL}/${usuario.id}`);
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/count`);
  }

  countByNomeOuSigla(nome: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/search/${nome}/count`);
  }

  findByNomeOuSigla(nomeOuSigla: string, pagina: number, tamanhoPagina: number): Observable<Usuario[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }
    return this.http.get<Usuario[]>(`${this.baseURL}/search/${nomeOuSigla}`, { params });
  }

  alterarSituacao(id: number, situacao: boolean): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseURL}/situacao/${id}`, situacao);
  }
}