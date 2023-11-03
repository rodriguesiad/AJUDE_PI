import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiarioListComponent } from './beneficiario/components/beneficiario-list/beneficiario-list.component';

const routes: Routes = [
  {
    path: '',
    component: BeneficiarioListComponent
  },
  {
    path: 'beneficiarios', loadChildren:
      () => import('./beneficiario/beneficiario.module')
        .then(m => m.BeneficiarioModule)
  },
  {
    path: 'orgaos', loadChildren:
      () => import('./orgao/orgao.module')
        .then(m => m.OrgaoModule)
  },
  {
    path: 'usuarios', loadChildren:
      () => import('./usuario/usuario.module')
        .then(m => m.UsuarioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
