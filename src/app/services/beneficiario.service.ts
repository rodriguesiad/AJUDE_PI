import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeneficiarioService {
  private baseURL: string =  'http://localhost:8080/beneficiarios';
  constructor(private http: HttpClient) {}
}