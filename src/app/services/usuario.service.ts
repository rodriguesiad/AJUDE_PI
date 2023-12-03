import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL: string = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  findById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseURL}/${id}`);
  }

  findWithLotacoesById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseURL}/lotacoes/${id}`);
  }

  findAll(pagina: number, tamanhoPagina: number): Observable<Usuario[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }

    return this.http.get<Usuario[]>(`${this.baseURL}/lotacoes`, { params });
  }

  save(usuario: Usuario): Observable<Usuario> {
    const lotacoesSimplificadas = usuario.lotacoes.map(lotacao => ({
      idPerfil: lotacao.perfil,
      idOrgao: lotacao.orgao
    }));

    const usuarioRequest = {
      nome: usuario.nome,
      cpf: usuario.cpf,
      login: usuario.login,
      senha: usuario.senha,
      orgaosPerfis: lotacoesSimplificadas
    }

    return this.http.post<Usuario>(`${this.baseURL}`, usuarioRequest);
  }

  update(usuario: Usuario): Observable<Usuario> {
    const lotacoesSimplificadas = usuario.lotacoes.map(lotacao => ({
      idPerfil: lotacao.perfil,
      idOrgao: lotacao.orgao
    }));

    const usuarioRequest = {
      nome: usuario.nome,
      cpf: usuario.cpf,
      login: usuario.login,
      senha: usuario.senha,
      orgaosPerfis: lotacoesSimplificadas
    }

    return this.http.put<Usuario>(`${this.baseURL}/${usuario.id}`, usuarioRequest);
  }

  delete(usuario: Usuario): Observable<any> {
    return this.http.delete<Usuario>(`${this.baseURL}/${usuario.id}`);
  }

  count(): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/count`);
  }

  countByNomeOuCpf(nome: string): Observable<number> {
    return this.http.get<number>(`${this.baseURL}/search/${nome}/count`);
  }

  findByNomeOuCpf(nomeOuCpf: string, pagina: number, tamanhoPagina: number): Observable<Usuario[]> {
    const params = {
      page: pagina.toString(),
      pageSize: tamanhoPagina.toString()
    }
    return this.http.get<Usuario[]>(`${this.baseURL}/search/${nomeOuCpf}`, { params });
  }

  alterarSituacao(id: number, situacao: boolean): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.baseURL}/situacao/${id}`, situacao);
  }

  findPerfis(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(`${this.baseURL}/perfis`);
  }

}