import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SharedService} from "../../../shared/services/shared.service";

@Component({
  selector: 'app-movimentacao-form',
  templateUrl: './movimentacao-form.component.html',
  styleUrls: ['./movimentacao-form.component.css']
})
export class MovimentacaoFormComponent {
  movimentacao: FormGroup;
  constructor(private sharedService: SharedService, private formBuilder: FormBuilder) {
    this.movimentacao = formBuilder.group({});
  }

  isCadastro() {
    this.sharedService.setIsCadastro(false);
  }
}
