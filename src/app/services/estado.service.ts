import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  private baseURL: string =  'http://localhost:8080/estados';
  constructor(private http: HttpClient) {}
}