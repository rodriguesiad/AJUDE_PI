import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  private baseURL: string =  'http://localhost:8080/municipios';
  constructor(private http: HttpClient) {}
}