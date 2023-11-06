import { Component } from '@angular/core';
import {SharedService} from "../../../shared/services/shared.service";

@Component({
  selector: 'app-encaminhamento-list',
  templateUrl: './encaminhamento-list.component.html',
  styleUrls: ['./encaminhamento-list.component.css']
})
export class EncaminhamentoListComponent {
  constructor(private sharedService: SharedService) {}

  isCadastro() {
    this.sharedService.setIsCadastro(true);
  }
}
