import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    path: 'usuario', loadChildren:
      () => import('./usuario/usuario.module')
        .then(m => m.UsuarioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
