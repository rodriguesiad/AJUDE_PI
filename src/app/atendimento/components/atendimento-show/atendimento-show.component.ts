import { Component } from '@angular/core';
import {SharedService} from "../../../shared/services/shared.service";
import { ActivatedRoute } from '@angular/router';
import { Atendimento } from 'src/app/models/atendimento.model';
import { Beneficiario } from 'src/app/models/beneficiario.model';

@Component({
  selector: 'app-atendimento-show',
  templateUrl: './atendimento-show.component.html',
  styleUrls: ['./atendimento-show.component.css']
})
export class AtendimentoShowComponent {
  atendimento: Atendimento;
  beneficiario: Beneficiario;

  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute) {
    this.beneficiario =  this.activatedRoute.snapshot.data['beneficiario'];
    this.atendimento =  this.activatedRoute.snapshot.data['atendimento'];
  }

  get isCadastro() {
    return this.sharedService.getIsCadastro();
  }

}
