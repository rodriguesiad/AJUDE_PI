import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Atendimento } from 'src/app/models/atendimento.model';
import { Orgao } from 'src/app/models/orgao.model';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { EncaminhamentoService } from 'src/app/services/encaminhamento.service';
import { OrgaoService } from 'src/app/services/orgao.service';

@Component({
  selector: 'app-encaminhamento-form',
  templateUrl: './encaminhamento-form.component.html',
  styleUrls: ['./encaminhamento-form.component.css']
})
export class EncaminhamentoFormComponent implements OnInit {
  formGroup: FormGroup;
  atendimento: Atendimento | undefined;
  orgaos: Orgao[] = [];

  constructor(private encaminhamentoService: EncaminhamentoService, private formBuilder: FormBuilder,
    private atendimentoService: AtendimentoService, private orgaoService: OrgaoService) {
    this.formGroup = formBuilder.group({
      idAtendimento: [null],
      idOrgao: [null],
      motivo: ['']
    });

    this.atendimento = this.atendimentoService.getAtendimento();
  }

  ngOnInit(): void {
    this.orgaoService.findAll(0, 100).subscribe(data => {
      this.orgaos = data;
      this.inicializeForm();
    });
  }

  inicializeForm() {
    if (this.atendimento != undefined) {
      this.formGroup = this.formBuilder.group({
        idAtendimento: [this.atendimento.id],
        idOrgao: [null, Validators.required],
        motivo: ['', Validators.required]
      });

      this.orgaos = this.orgaos.filter(orgao => orgao.id !== this.atendimento?.orgao.id);
    }
  }

  save() {
    if (this.formGroup.valid) {
      if (this.atendimento != undefined) {
        const movimentacao = this.formGroup.value;

        this.encaminhamentoService.save(movimentacao).subscribe({
          next: (movimentacaoNova) => {
            this.isCadastro();
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      }
    }
  }

  isCadastro() {
    this.encaminhamentoService.setIsCadastro(false);
  }

}
