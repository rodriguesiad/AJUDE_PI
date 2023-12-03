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
  modoVisualizacao: boolean = false;
  idUsuarioVisualizacao: number = 0;

  estado = new Estado(1, "Tocantins", "TO");
  municipio = new Municipio(1, "Palmas", this.estado);

  perfis: { value: number, label: string }[] = [
    { value: 1, label: 'Administrador' },
    { value: 2, label: 'Assistente' }
  ]

  orgaos: Orgao[] = [
    new Orgao({ id: 2, nome: 'Centro de Referência de Assistência Social', sigla: 'CRAS', municipio: this.municipio, estado: this.estado, ativo: true },),
    new Orgao({ id: 3, nome: 'Centro de Ref. Especializado de Ass. Social', sigla: 'CREAS', municipio: this.municipio, estado: this.estado, ativo: true },)
  ]

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {
    this.formGroup = this.formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      lotacoes: this.formBuilder.array([]),
    });
  }

  get lotacoes(): FormArray {
    return this.formGroup.get('lotacoes') as FormArray;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.modoVisualizacao = params['modoVisualizacao'] === 'true';
    });

    this.initializeForm();
  }

  initializeForm(): void {
    const usuario: Usuario = this.activatedRoute.snapshot.data['usuario'];

    this.formGroup = this.formBuilder.group({
      id: [(usuario && usuario.id) ? usuario.id : null],
      nome: [{ value: (usuario && usuario.nome) ? usuario.nome : '', disabled: this.modoVisualizacao }, Validators.required],
      email: [{ value: (usuario && usuario.email) ? usuario.email : '', disabled: this.modoVisualizacao }, Validators.required],
      cpf: [{ value: (usuario && usuario.cpf) ? usuario.cpf : '', disabled: this.modoVisualizacao }, Validators.required],
      senha: [{ value: (usuario && usuario.senha) ? usuario.senha : '', disabled: this.modoVisualizacao }, Validators.required],
      lotacoes: this.formBuilder.array([])
    });

    if (usuario.lotacoes && usuario.lotacoes.length > 0) {
      usuario.lotacoes.forEach((lotacoes: any) => {
        this.lotacoes.push(
          this.formBuilder.group({
            perfil: [{ value: (lotacoes && lotacoes.perfil) ? lotacoes.perfil.value : null, disabled: this.modoVisualizacao }, Validators.required],
            orgao: [{ value: (lotacoes && lotacoes.orgao) ? lotacoes.orgao.id : null, disabled: this.modoVisualizacao }, Validators.required],
          })
        );
      });

      this.minPerfilOrgao = true;
    }

    if (this.modoVisualizacao === true) {
      this.idUsuarioVisualizacao = usuario.id;
    }
  }

  adicionarPerfil(): void {
    this.minPerfilOrgao = true;

    this.lotacoes.push(
      this.formBuilder.group({
        perfil: [null, Validators.required],
        orgao: [null, Validators.required],
      })
    );
  }

  removerPerfil(index: number): void {
    this.lotacoes.removeAt(index);
    this.minPerfilOrgao = this.lotacoes.length > 0;
  }

  salvar(): void {
    if (this.formGroup.valid && this.minPerfilOrgao) {
      const dadosFormulario = this.formGroup.value;
      console.log('Dados do formulário:', dadosFormulario);
      this.router.navigateByUrl('/usuarios/view');
    } else {
      if (!this.minPerfilOrgao) {
        alert("Adicione pelo menos 1 perfil para o usuário.")
      } else {
        alert('O formulário está inválido.');
      }
    }
  }

  isModoVisualizacao(): any {
    return this.modoVisualizacao ? { readonly: true } : null;
  }

}
