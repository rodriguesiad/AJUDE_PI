import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { beneficiarioResolver } from '../beneficiario/resolver/beneficiario-resolver';
import { AtendimentoFormComponent } from './components/atendimento-form/atendimento-form.component';
import { AtendimentoListComponent } from './components/atendimento-list/atendimento-list.component';
import { AtendimentoShowComponent } from './components/atendimento-show/atendimento-show.component';
import { atendimentoResolver } from './resolver/atendimento-resolver';

const routes: Routes = [
  { path: 'show/:id', component: AtendimentoShowComponent, resolve: { atendimento: atendimentoResolver } },
  { path: 'list/:id', component: AtendimentoListComponent, resolve: { beneficiario: beneficiarioResolver } },
  { path: 'new/:id', component: AtendimentoFormComponent, resolve: { beneficiario: beneficiarioResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
