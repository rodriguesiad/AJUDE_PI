import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Atendimento } from 'src/app/models/atendimento.model';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-form',
  templateUrl: './movimentacao-form.component.html',
  styleUrls: ['./movimentacao-form.component.css']
})
export class MovimentacaoFormComponent implements OnInit {
  formGroup: FormGroup;
  fileName: string = '';
  selectedFile: File | null = null;
  documentPreview: string | ArrayBuffer | null = null;
  atendimento: Atendimento | undefined;

  constructor(private movimentacaoService: MovimentacaoService, private formBuilder: FormBuilder, private router: Router, private atendimentoService: AtendimentoService) {
    this.formGroup = formBuilder.group({
      idAtendimento: [null],
      tituloMovimentacao: [''],
      descricao: ['']
    });

    this.atendimento = this.atendimentoService.getAtendimento();
  }

  ngOnInit(): void {
    this.inicializeForm();
  }

  inicializeForm() {
    if (this.atendimento != undefined) {
      this.formGroup = this.formBuilder.group({
        idAtendimento: [this.atendimento.id],
        tituloMovimentacao: ['', Validators.required],
        descricao: ['']
      });
    }
  }

  isCadastro() {
    this.movimentacaoService.setIsCadastro(false);
  }

  save() {
    if (this.formGroup.valid) {
      if (this.atendimento != undefined) {
        const movimentacao = this.formGroup.value;

        this.movimentacaoService.save(movimentacao).subscribe({
          next: (movimentacaoNova) => {
            this.uploadDocumento(movimentacaoNova.id);
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      }
    }
  }

  carregarDocumentoSelecionado(event: any): void {
    const file = event.target.files[0];
    this.selectedFile = event.target.files[0];
    this.fileName = file ? file.name : '';
  }

  uploadDocumento(movimentacaoId: number) {
    if (this.selectedFile) {
      this.movimentacaoService.uploadDocumento(movimentacaoId, this.selectedFile)
        .subscribe({
          next: () => {
            this.isCadastro();
          },
          error: err => {
            console.log('Erro ao cadastrar documento.' + JSON.stringify(err));
          }
        })
    } else {
      this.isCadastro();
    }
  }

}
