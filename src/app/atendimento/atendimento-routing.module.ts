import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoListComponent } from './components/atendimento-list/atendimento-list.component';
import { AtendimentoFormComponent } from './components/atendimento-form/atendimento-form.component';
import { AtendimentoShowComponent } from './components/atendimento-show/atendimento-show.component';
import { atendimentoResolver } from './resolver/atendimento-resolver';
import { beneficiarioResolver } from '../beneficiario/resolver/beneficiario-resolver';

const routes: Routes = [
  {
    path: 'show/:id', component: AtendimentoShowComponent, resolve: { atendimento: atendimentoResolver, beneficiario: beneficiarioResolver}},
  { path: 'list', component: AtendimentoListComponent, resolve: { atendimento: atendimentoResolver, beneficiario: beneficiarioResolver } },
  { path: 'new', component: AtendimentoFormComponent, resolve: { beneficiario: beneficiarioResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
