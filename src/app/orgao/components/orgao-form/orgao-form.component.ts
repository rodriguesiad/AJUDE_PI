import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/models/estado.model';
import { Municipio } from 'src/app/models/municipio.model';
import { Orgao } from 'src/app/models/orgao.model';
import { EstadoService } from 'src/app/services/estado.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { OrgaoService } from 'src/app/services/orgao.service';

@Component({
  selector: 'app-orgao-form',
  templateUrl: './orgao-form.component.html',
  styleUrls: ['./orgao-form.component.css']
})
export class OrgaoFormComponent {
  formGroup: FormGroup;
  maxDate = new Date();
  apiResponse: any = null;
  estados: Estado[] = [];
  municipios: Municipio[] = [];

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router,
    private estadoService: EstadoService, private municipioService: MunicipioService, private orgaoService: OrgaoService) {

    this.formGroup = formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      sigla: [''],
      estado: [null],
      municipio: [null]
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
    const orgao: Orgao = this.activatedRoute.snapshot.data['orgao'];
    const municipio = this.municipios.find(municipio => municipio.id === (orgao?.municipio?.id || null));
    const estado = this.estados.find(estado => estado.id === (orgao?.municipio?.estado?.id || null));

    this.formGroup = this.formBuilder.group({
      id: [(orgao && orgao.id) ? orgao.id : null],
      nome: [(orgao && orgao.nome) ? orgao.nome : '', Validators.required],
      sigla: [(orgao && orgao.sigla) ? orgao.sigla : ''],
      municipio: [municipio],
      estado: [estado]
    })
  }

  salvar() {
    if (this.formGroup.valid) {
      const orgao = this.formGroup.value;

      if (orgao.id == null) {
        this.orgaoService.save(orgao).subscribe({
          next: (orgaoNovo) => {
            this.router.navigateByUrl('/orgaos/list');
          },
          error: (err) => {
            this.apiResponse = err.error;

            const formControls = ['nome', 'sigla', 'estado', 'municipio'];

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

            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.orgaoService.update(orgao).subscribe({
          next: (orgaoAlterado) => {
            this.router.navigateByUrl('/orgaos/list');
          },
          error: (err) => {
            this.apiResponse = err.error;

            const formControls = ['nome', 'sigla', 'estado', 'municipio'];

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

            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
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
