import { Component } from '@angular/core';
import {SharedService} from "../../../shared/services/shared.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-encaminhamento-form',
  templateUrl: './encaminhamento-form.component.html',
  styleUrls: ['./encaminhamento-form.component.css']
})
export class EncaminhamentoFormComponent {
  encaminhamento: FormGroup;
  constructor(private sharedService: SharedService, private formBuilder: FormBuilder) {
    this.encaminhamento = formBuilder.group({});
  }

  isCadastro() {
    this.sharedService.setIsCadastro(false);
  }
}
