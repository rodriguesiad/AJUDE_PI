import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/models/estado.model';
import { Municipio } from 'src/app/models/municipio.model';
import { Orgao } from 'src/app/models/orgao.model';

@Component({
  selector: 'app-orgao-form',
  templateUrl: './orgao-form.component.html',
  styleUrls: ['./orgao-form.component.css']
})
export class OrgaoFormComponent {
  formGroup: FormGroup;
  maxDate = new Date();

  estados: Estado[] = [
    new Estado(1, 'Tocantins', 'TO'),
    new Estado(2, 'Rio de Janeiro', 'RJ'),
    new Estado(3, 'São Paulo', 'SP'),
  ];

  municipios: Municipio[] = [
    new Municipio(1, 'Palmas', this.estados[0]),
    new Municipio(2, 'Porto Nacional', this.estados[0]),
    new Municipio(3, 'Miracema', this.estados[0]),
  ];

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {

    this.formGroup = formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      sigla: [''],
      estado: [null],
      municipio: [null]
    })
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    const orgao: Orgao = this.activatedRoute.snapshot.data['orgao'];

    this.formGroup = this.formBuilder.group({
      id: [(orgao && orgao.id) ? orgao.id : null],
      nome: [(orgao && orgao.nome) ? orgao.nome : '', Validators.required],
      sigla: [(orgao && orgao.sigla) ? orgao.sigla : ''],
      municipio: [(orgao && orgao.municipio) ? orgao.municipio : null],
      estado: [(orgao && orgao.estado) ? orgao.estado : null]
    })

  }

  salvar() {
    if (this.formGroup.valid) {
      const novo = this.formGroup.value;

      if (novo.id == null) {
        console.log('Órgão cadastrado.')
        this.router.navigateByUrl('/orgaos/list');
      } else {
        console.log('Órgão alterado.')
        this.router.navigateByUrl('/orgaos/list');
      }
    }
  }

}
