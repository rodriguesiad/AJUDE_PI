import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL: string =  'http://localhost:8080/auth';
  constructor(private http: HttpClient) {}
}