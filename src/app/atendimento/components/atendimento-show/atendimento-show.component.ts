import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Atendimento } from 'src/app/models/atendimento.model';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { EncaminhamentoService } from 'src/app/services/encaminhamento.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-atendimento-show',
  templateUrl: './atendimento-show.component.html',
  styleUrls: ['./atendimento-show.component.css']
})
export class AtendimentoShowComponent {
  atendimento: Atendimento;

  constructor(private activatedRoute: ActivatedRoute,
    private movimentacaoService: MovimentacaoService,
    private encaminhamentoService: EncaminhamentoService,
    private service: AtendimentoService) {
    this.atendimento = this.activatedRoute.snapshot.data['atendimento'];
    this.service.setAtendimento(this.atendimento);
  }

  get isCadastroMovimentacao() {
    return this.movimentacaoService.getIsCadastro();
  }

  get isCadastroEncaminhamento() {
    return this.encaminhamentoService.getIsCadastro();
  }

}
