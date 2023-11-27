import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-form',
  templateUrl: './movimentacao-form.component.html',
  styleUrls: ['./movimentacao-form.component.css']
})
export class MovimentacaoFormComponent {
  movimentacao: FormGroup;
  constructor(private movimentacaoService: MovimentacaoService, private formBuilder: FormBuilder) {
    this.movimentacao = formBuilder.group({});
  }

  isCadastro() {
    this.movimentacaoService.setIsCadastro(false);
  }
}
