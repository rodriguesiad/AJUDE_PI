import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estado } from 'src/app/models/estado.model';
import { Municipio } from 'src/app/models/municipio.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent {
  formGroup: FormGroup;
  minPerfilOrgao = false;

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

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formGroup = this.formBuilder.group({
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
