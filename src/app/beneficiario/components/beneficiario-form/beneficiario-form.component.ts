import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beneficiario } from 'src/app/models/beneficiario.model';

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
  maxDate = new Date();

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {

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
      cep: [''],
      estado: [null],
      municipio: [null],
      bairro: [''],
      logradouro: [''],
      numero: [''],
      complemento: ['']
    })
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    const beneficiario: Beneficiario = this.activatedRoute.snapshot.data['beneficiario'];

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
      cep: [(beneficiario && beneficiario.cep) ? beneficiario.cep : ''],
      estado: [(beneficiario && beneficiario.estado) ? beneficiario.estado : null],
      municipio: [(beneficiario && beneficiario.municipio) ? beneficiario.municipio : null],
      bairro: [(beneficiario && beneficiario.bairro) ? beneficiario.bairro : ''],
      logradouro: [(beneficiario && beneficiario.logradouro) ? beneficiario.logradouro : ''],
      numero: [(beneficiario && beneficiario.numero) ? beneficiario.numero : ''],
      complemento: [(beneficiario && beneficiario.complemento) ? beneficiario.complemento : '']
    })

  }

  salvar() {
    if (this.formGroup.valid) {
      const novo = this.formGroup.value;

      if (novo.id == null) {
        console.log('Beneficiário cadastrado.')
        this.router.navigateByUrl('/beneficiarios/list');
      } else {
        console.log('Beneficiário alterado.')
        this.router.navigateByUrl('/beneficiarios/list');
      }
    }
  }

}
