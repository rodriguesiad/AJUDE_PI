import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrgaoService {
  private baseURL: string =  'http://localhost:8080/orgaos';
  constructor(private http: HttpClient) {}
}