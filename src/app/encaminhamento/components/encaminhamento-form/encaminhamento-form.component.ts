import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { EncaminhamentoService } from 'src/app/services/encaminhamento.service';

@Component({
  selector: 'app-encaminhamento-form',
  templateUrl: './encaminhamento-form.component.html',
  styleUrls: ['./encaminhamento-form.component.css']
})
export class EncaminhamentoFormComponent {
  encaminhamento: FormGroup;
  constructor( private encaminhamentoService: EncaminhamentoService, private formBuilder: FormBuilder) {
    this.encaminhamento = formBuilder.group({});
  }

  isCadastro() {
    this.encaminhamentoService.setIsCadastro(false);
  }
}
