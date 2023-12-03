import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beneficiario } from 'src/app/models/beneficiario.model';
import { Estado } from 'src/app/models/estado.model';
import { Municipio } from 'src/app/models/municipio.model';
import { BeneficiarioService } from 'src/app/services/beneficiario.service';
import { EstadoService } from 'src/app/services/estado.service';
import { MunicipioService } from 'src/app/services/municipio.service';

@Component({
  selector: 'app-beneficiario-form',
  templateUrl: './beneficiario-form.component.html',
  styleUrls: ['./beneficiario-form.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class BeneficiarioFormComponent implements OnInit {
  formGroup: FormGroup;
  enderecoFormGroup: FormGroup;
  maxDate = new Date();
  apiResponse: any = null;
  estados: Estado[] = [];
  municipios: Municipio[] = [];

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router,
    private service: BeneficiarioService, private estadoService: EstadoService, private municipioService: MunicipioService) {

    this.enderecoFormGroup = formBuilder.group({
      cep: [''],
      estado: [null],
      municipio: [null],
      bairro: [''],
      logradouro: [''],
      numero: [''],
      complemento: ['']
    });

    this.formGroup = formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      email: [''],
      cpf: ['', Validators.required],
      rg: [''],
      nis: ['', Validators.required],
      dataNascimento: [null],
      telefone: [''],
      cpfDosPais: [''],
      endereco: this.enderecoFormGroup
    })

  }

  ngOnInit(): void {
    this.estadoService.findAll(0, 27).subscribe(data => {
      this.estados = data;

      this.municipioService.findAll(0, 100).subscribe(data => {
        this.municipios = data;
        this.initializeForm();
      });
    });
  }

  initializeForm() {
    const beneficiario: Beneficiario = this.activatedRoute.snapshot.data['beneficiario'];
    const municipio = this.municipios.find(municipio => municipio.id === (beneficiario?.endereco.municipio?.id || null));
    const estado = this.estados.find(estado => estado.id === (beneficiario?.endereco.municipio?.estado?.id || null));

    this.enderecoFormGroup = this.formBuilder.group({
      cep: [(beneficiario && beneficiario.endereco.cep) ? beneficiario.endereco.cep : ''],
      estado: [estado],
      municipio: [municipio],
      bairro: [(beneficiario && beneficiario.endereco.bairro) ? beneficiario.endereco.bairro : ''],
      logradouro: [(beneficiario && beneficiario.endereco.logradouro) ? beneficiario.endereco.logradouro : ''],
      numero: [(beneficiario && beneficiario.endereco.numero) ? beneficiario.endereco.numero : ''],
      complemento: [(beneficiario && beneficiario.endereco.complemento) ? beneficiario.endereco.complemento : '']
    });

    this.formGroup = this.formBuilder.group({
      id: [(beneficiario && beneficiario.id) ? beneficiario.id : null],
      nome: [(beneficiario && beneficiario.nome) ? beneficiario.nome : '', Validators.required],
      email: [(beneficiario && beneficiario.email) ? beneficiario.email : ''],
      cpf: [(beneficiario && beneficiario.cpf) ? beneficiario.cpf : '', Validators.required],
      rg: [(beneficiario && beneficiario.rg) ? beneficiario.rg : ''],
      nis: [(beneficiario && beneficiario.nis) ? beneficiario.nis : '', Validators.required],
      dataNascimento: [(beneficiario && beneficiario.dataNascimento) ? beneficiario.dataNascimento : null],
      telefone: [(beneficiario && beneficiario.telefone) ? beneficiario.telefone : ''],
      cpfDosPais: [(beneficiario && beneficiario.cpfDosPais) ? beneficiario.cpfDosPais : ''],
      endereco: this.enderecoFormGroup
    })

  }

  salvar() {
    if (this.formGroup.valid) {
      const novo = this.formGroup.value;

      const dataFormatada = new DatePipe('pt-br').transform(novo.dataNascimento, 'yyyy-MM-dd');
      novo.dataNascimento = dataFormatada;
      console.log(novo);
      if (novo.id == null) {
        this.service.save(novo).subscribe({
          next: (beneficiarioNovo) => {
            this.router.navigateByUrl('/atendimentos/list/' + beneficiarioNovo.id);
          },
          error: (err) => {
            this.apiResponse = err.error;

            const formControls = ['nome', 'email', 'cpf', 'telefone', 'rg', 'nis', 'dataNascimento', 'telefone', 'cpfDosPais', 'endereco'];
            const enderecoFormControls = ['cep', 'estado', 'municipio', 'bairro', 'logradouro', 'numero', 'complemento'];

            formControls.forEach(controlName => {
              this.formGroup.get(controlName)?.setErrors(null);
            });

            enderecoFormControls.forEach(controlName => {
              this.formGroup.get(controlName)?.setErrors(null);
            });

            if (this.apiResponse && this.apiResponse.errors) {
              this.apiResponse.errors.forEach((error: { fieldName: any; message: any; }) => {
                const fieldName = error.fieldName;
                const errorMessage = error.message;

                if (formControls.includes(fieldName)) {
                  this.formGroup.get(fieldName)?.setErrors({ apiError: errorMessage });
                }

                if (enderecoFormControls.includes(fieldName)) {
                  this.formGroup.get(fieldName)?.setErrors({ apiError: errorMessage });
                }
              });
            }

            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      }
      else {
        console.log('Beneficiário atualizado.');
        this.service.update(novo).subscribe({
          next: (beneficiarioAtualizado) => {
            this.router.navigateByUrl('/atendimentos/list/' + beneficiarioAtualizado.id);
          },
          error: (err) => {
            this.apiResponse = err.error;

            const formControls = ['nome', 'email', 'cpf', 'telefone', 'rg', 'nis', 'dataNascimento', 'telefone', 'cpfDosPais', 'endereco'];

            formControls.forEach(controlName => {
              this.formGroup.get(controlName)?.setErrors(null);
            });

            if (this.apiResponse && this.apiResponse.errors) {
              this.apiResponse.errors.forEach((error: { fieldName: any; message: any; }) => {
                const fieldName = error.fieldName;
                const errorMessage = error.message;

                if (formControls.includes(fieldName)) {
                  this.formGroup.get(fieldName)?.setErrors({ apiError: errorMessage });
                }
              });
            }

            console.log('Erro ao alterar' + JSON.stringify(err));
          }
        })
      }
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