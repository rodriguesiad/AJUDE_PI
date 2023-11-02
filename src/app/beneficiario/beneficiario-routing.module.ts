import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiarioListComponent } from './components/beneficiario-list/beneficiario-list.component';

const routes: Routes = [
  { path: 'list', component: BeneficiarioListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiarioRoutingModule { }
