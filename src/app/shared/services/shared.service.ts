import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  private isCadastro: boolean = false;

  getIsCadastro(): boolean {
    return this.isCadastro;
  }

  setIsCadastro(value: boolean) {
    this.isCadastro = value;
  }
}
