import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Orgao } from 'src/app/models/orgao.model';
import { Perfil } from 'src/app/models/perfil.model';
import { Usuario } from 'src/app/models/usuario.model';
import { OrgaoService } from 'src/app/services/orgao.service';
import { UsuarioService } from 'src/app/services/usuario.service';

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
  apiResponse: any = null;
  perfis: Perfil[] = [];
  orgaos: Orgao[] = [];

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router,
    private orgaoService: OrgaoService, private service: UsuarioService) {

    this.formGroup = this.formBuilder.group({
      id: [null],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required],
      lotacoes: this.formBuilder.array([]),
    });
  }

  get lotacoes(): FormArray {
    return this.formGroup.get('lotacoes') as FormArray;
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(segments => {
      this.modoVisualizacao = this.router.url.includes('view');
    });

    this.orgaoService.findAll(0, 100).subscribe(data => {
      this.orgaos = data;
      this.service.findPerfis().subscribe(dataPerfil => {
        this.perfis = dataPerfil;
        this.perfis = this.perfis.filter(item => item.id !== 3);
        this.initializeForm();
      })
    });
  }

  initializeForm(): void {
    const usuario: Usuario = this.activatedRoute.snapshot.data['usuario'];

    this.formGroup = this.formBuilder.group({
      id: [(usuario && usuario.id) ? usuario.id : null],
      nome: [{ value: (usuario && usuario.nome) ? usuario.nome : '', disabled: this.modoVisualizacao }, Validators.required],
      login: [{ value: (usuario && usuario.login) ? usuario.login : '', disabled: this.modoVisualizacao }, Validators.required],
      cpf: [{ value: (usuario && usuario.cpf) ? usuario.cpf : '', disabled: this.modoVisualizacao }, Validators.required],
      senha: [{ value: (usuario && usuario.senha) ? usuario.senha : '', disabled: this.modoVisualizacao }],
      lotacoes: this.formBuilder.array([])
    });

    if (!usuario || usuario.id === null) {
      this.formGroup.get('senha')?.setValidators([Validators.required]);
      this.formGroup.get('senha')?.updateValueAndValidity();
    }

    if (usuario.lotacoes && usuario.lotacoes.length > 0) {
      usuario.lotacoes.forEach((lotacao: any) => {
        const newFormGroup = this.formBuilder.group({
          perfil: [{ value: (lotacao && lotacao.perfil) ? lotacao.perfil.id : null, disabled: this.modoVisualizacao }, Validators.required],
          orgao: [{ value: (lotacao && lotacao.orgao) ? lotacao.orgao.id : null, disabled: this.modoVisualizacao }, Validators.required],
        });

        this.lotacoes.push(newFormGroup);
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
      const usuario = this.formGroup.value;
      if (usuario.id == null) {
        this.service.save(usuario).subscribe({
          next: (usuarioNovo) => {
            this.router.navigateByUrl('usuarios/view/' + usuarioNovo.id);
          },
          error: (err) => {
            this.apiResponse = err.error;
          
            const formControls = ['nome', 'login', 'cpf', 'senha', 'lotacoes'];

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
        console.log(usuario);
        this.service.update(usuario).subscribe({
          next: (usuarioAtualizado) => {
            this.router.navigateByUrl('usuarios/view/' + usuarioAtualizado.id);
          },
          error: (err) => {
            this.apiResponse = err.error;
          
            const formControls = ['nome', 'login', 'cpf', 'senha', 'lotacoes'];

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

  getErrorMessage(fieldName: string): string {
    if (this.apiResponse && this.apiResponse.errors) {
      const error = this.apiResponse.errors.find((error: any) => error.fieldName === fieldName);
      return error ? error.message : '';
    } else {
      return '';
    }
  }

}
