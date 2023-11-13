import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from 'src/app/models/estado.model';
import { Municipio } from 'src/app/models/municipio.model';
import { Orgao } from 'src/app/models/orgao.model';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  formGroup: FormGroup;
  minPerfilOrgao = false;


  estado = new Estado(1, "Tocantins", "TO");
  municipio = new Municipio(1, "Palmas", this.estado);

  perfis: { value: number, label: string }[] = [
    { value: 1, label: 'Administrador' },
    { value: 2, label: 'Assistente' }
  ]

  orgaos: Orgao[] = [
    new Orgao({ id: 2, nome: 'Centro de Referência de Assistência Social', sigla: 'CRAS', municipio: this.municipio, estado: this.estado },),
    new Orgao({ id: 3, nome: 'Centro de Ref. Especializado de Ass. Social', sigla: 'CREAS', municipio: this.municipio, estado: this.estado },)
  ]



  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {
    this.formGroup = this.formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      perfisOrgao: this.formBuilder.array([]),
    });
  }

  get perfisOrgao(): FormArray {
    return this.formGroup.get('perfisOrgao') as FormArray;
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    const usuario: Usuario = this.activatedRoute.snapshot.data['usuario'];

    this.formGroup = this.formBuilder.group({
      id: [(usuario && usuario.id) ? usuario.id : null],
      nome: [(usuario && usuario.nome) ? usuario.nome : '', Validators.required],
      email: [(usuario && usuario.email) ? usuario.email : '', Validators.required],
      cpf: [(usuario && usuario.cpf) ? usuario.cpf : '', Validators.required],
      senha: [(usuario && usuario.senha) ? usuario.senha : '', Validators.required],
      perfisOrgao: this.formBuilder.array([])
    })

    if (usuario.perfisOrgao && usuario.perfisOrgao.length > 0) {
      usuario.perfisOrgao.forEach((perfilOrgao: any) => {
        this.perfisOrgao.push(
          this.formBuilder.group({
            perfil: [(perfilOrgao && perfilOrgao.perfil) ? perfilOrgao.perfil.value : null, Validators.required],
            orgao: [(perfilOrgao && perfilOrgao.orgao) ? perfilOrgao.orgao.id : null, Validators.required],
          })
        );
      });

      this.minPerfilOrgao = true;
    }
  }

  adicionarPerfil(): void {
    this.minPerfilOrgao = true;

    this.perfisOrgao.push(
      this.formBuilder.group({
        perfil: [null, Validators.required],
        orgao: [null, Validators.required],
      })
    );
  }

  removerPerfil(index: number): void {
    this.perfisOrgao.removeAt(index);
    this.minPerfilOrgao = this.perfisOrgao.length > 0;
  }

  salvar(): void {
    if (this.formGroup.valid && this.minPerfilOrgao) {
      const dadosFormulario = this.formGroup.value;
      console.log('Dados do formulário:', dadosFormulario);
      this.router.navigateByUrl('/usuarios/list');
    } else {
      if (!this.minPerfilOrgao) {
        alert("Adicione pelo menos 1 perfil para o usuário.")
      } else {
        alert('O formulário está inválido.');
      }
    }
  }

}
