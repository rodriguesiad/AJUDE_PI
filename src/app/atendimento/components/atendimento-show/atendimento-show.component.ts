import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Atendimento } from 'src/app/models/atendimento.model';
import { Beneficiario } from 'src/app/models/beneficiario.model';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';
import { Encaminhamento } from 'src/app/models/encaminhamento.model';
import { EncaminhamentoService } from 'src/app/services/encaminhamento.service';

@Component({
  selector: 'app-atendimento-show',
  templateUrl: './atendimento-show.component.html',
  styleUrls: ['./atendimento-show.component.css']
})
export class AtendimentoShowComponent {
  atendimento: Atendimento;
  beneficiario: Beneficiario;

  constructor(private activatedRoute: ActivatedRoute, private movimentacaoService: MovimentacaoService, private encaminhamentoService: EncaminhamentoService) {
    this.beneficiario = this.activatedRoute.snapshot.data['beneficiario'];
    this.atendimento = this.activatedRoute.snapshot.data['atendimento'];
  }

  get isCadastroMovimentacao() {
    return this.movimentacaoService.getIsCadastro();
  }

  get isCadastroEncaminhamento() {
    return this.encaminhamentoService.getIsCadastro();
  }

}
