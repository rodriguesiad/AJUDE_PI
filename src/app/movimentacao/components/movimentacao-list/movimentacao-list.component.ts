import { Component } from '@angular/core';
import {SharedService} from "../../../shared/services/shared.service";

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent {

  constructor(private sharedService: SharedService) {}

  isCadastro() {
    this.sharedService.setIsCadastro(true);
  }
}
