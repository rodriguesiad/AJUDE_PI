import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  private isCadastro: boolean = false;

  getIsCadastro(): boolean {
    return this.isCadastro;
  }

  setIsCadastro(value: boolean) {
    this.isCadastro = value;
  }
}