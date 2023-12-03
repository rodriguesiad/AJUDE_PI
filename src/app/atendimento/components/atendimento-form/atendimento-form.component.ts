import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beneficiario } from 'src/app/models/beneficiario.model';
import { SituacaoAtendimento } from 'src/app/models/situacao-atendimento.model';
import { AtendimentoService } from 'src/app/services/atendimento.service';

@Component({
  selector: 'app-atendimento-form',
  templateUrl: './atendimento-form.component.html',
  styleUrls: ['./atendimento-form.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class AtendimentoFormComponent implements OnInit {
  formGroup: FormGroup;
  beneficiario: Beneficiario;
  situacoes: SituacaoAtendimento[] = [];
  maxDate = new Date();
  apiResponse: any = null;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private service: AtendimentoService, private router: Router, private datePipe: DatePipe) {
    this.beneficiario = this.activatedRoute.snapshot.data['beneficiario'];

    this.formGroup = formBuilder.group({
      id: [null],
      orgao: [null],
      idBeneficiario: [null],
      idSituacao: [null, Validators.required],
      tipoBeneficio: ['', Validators.required],
      descricao: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.service.findSituacoesAtendimento().subscribe(data => { this.situacoes = data; this.inicializeForm(); });
  }

  inicializeForm(): void {
    this.formGroup = this.formBuilder.group({
      id: [null],
      orgao: [null],
      usuarioInclusao: [null],
      idBeneficiario: [this.beneficiario.id],
      idSituacao: [null, Validators.required],
      tipoBeneficio: ['', Validators.required],
      descricao: ['', Validators.required]
    })
  }

  save(): void {
    if (this.formGroup.valid) {
      const atendimento = this.formGroup.value;
      console.log(atendimento);
      this.service.save(atendimento).subscribe({
        next: (atendimentoNovo) => {
          this.router.navigateByUrl('/atendimentos/show/' + atendimentoNovo.id);
        },
        error: (err) => {
          console.log(JSON.stringify(err));
        }
      })
    }
  }

  getErrorMessage(fieldName: string): string {
    if (this.apiResponse && this.apiResponse.errors) {
      const error = this.apiResponse.errors.find((error: any) => error.fieldName === fieldName);
      return error ? error.message : '';
    } else {
      return '';
    }
  }

}
