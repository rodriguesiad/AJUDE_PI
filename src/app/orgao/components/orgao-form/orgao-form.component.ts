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
  estados: Estado[] = [];
  municipios: Municipio[] = [];

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router,
    private estadoService: EstadoService, private municipioService: MunicipioService, private OrgaoService: OrgaoService) {

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
        this.OrgaoService.save(orgao).subscribe({
          next: (orgaoNovo) => {
            this.router.navigateByUrl('/orgaos/list');
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      } else {
        this.OrgaoService.update(orgao).subscribe({
          next: (orgaoAlterado) => {
            this.router.navigateByUrl('/orgaos/list');
          },
          error: (err) => {
            console.log('Erro ao incluir' + JSON.stringify(err));
          }
        });
      }
    }
  }

}
