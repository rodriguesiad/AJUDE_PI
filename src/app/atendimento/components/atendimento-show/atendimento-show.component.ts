import { Component } from '@angular/core';
import {SharedService} from "../../../shared/services/shared.service";

@Component({
  selector: 'app-atendimento-show',
  templateUrl: './atendimento-show.component.html',
  styleUrls: ['./atendimento-show.component.css']
})
export class AtendimentoShowComponent {

  constructor(private sharedService: SharedService) {}

  get isCadastro() {
    return this.sharedService.getIsCadastro();
  }

}
