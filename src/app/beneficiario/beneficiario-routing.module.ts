import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiarioListComponent } from './components/beneficiario-list/beneficiario-list.component';
import { BeneficiarioFormComponent } from './components/beneficiario-form/beneficiario-form.component';
import { beneficiarioResolver } from './resolver/beneficiario-resolver';
import { BeneficiarioViewComponent } from './components/beneficiario-view/beneficiario-view.component';

const routes: Routes = [
  { path: 'list', component: BeneficiarioListComponent },
  { path: 'new', component: BeneficiarioFormComponent },
  { path: 'edit/:id', component: BeneficiarioFormComponent, resolve: { beneficiario: beneficiarioResolver }},
  { path: 'view/:id', component: BeneficiarioViewComponent, resolve: { beneficiario: beneficiarioResolver }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeneficiarioRoutingModule { }
