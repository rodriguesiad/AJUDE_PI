import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseURL: string =  'http://localhost:8080/usuarios';
  constructor(private http: HttpClient) {}
}