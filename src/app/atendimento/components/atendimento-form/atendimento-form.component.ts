import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beneficiario } from 'src/app/models/beneficiario.model';

@Component({
  selector: 'app-atendimento-form',
  templateUrl: './atendimento-form.component.html',
  styleUrls: ['./atendimento-form.component.css']
})
export class AtendimentoFormComponent {

  beneficiario: Beneficiario;

  constructor(private activatedRoute: ActivatedRoute) {
    this.beneficiario = this.activatedRoute.snapshot.data['beneficiario'];
  }

  formatarTelefone(numero: string): string {
    if (numero != '') {
      const codigoPais = '+' + numero.slice(0, 2);
      const ddd = numero.slice(2, 4);
      const parte1 = numero.slice(4, 6);
      const parte2 = numero.slice(6, 10);
      return `${codigoPais} ${ddd} ${parte1} ${parte2}`;
    }

    return '';
  }

}
