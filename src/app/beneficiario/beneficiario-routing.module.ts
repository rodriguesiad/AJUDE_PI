import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiarioFormComponent } from './components/beneficiario-form/beneficiario-form.component';
import { BeneficiarioListComponent } from './components/beneficiario-list/beneficiario-list.component';
import { beneficiarioResolver } from './resolver/beneficiario-resolver';

const routes: Routes = [
  { path: 'list', component: BeneficiarioListComponent },
  { path: 'new', component: BeneficiarioFormComponent },
  { path: 'edit/:id', component: BeneficiarioFormComponent, resolve: { beneficiario: beneficiarioResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiarioRoutingModule { }
