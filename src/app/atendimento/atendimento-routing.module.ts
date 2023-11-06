import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoListComponent } from './components/atendimento-list/atendimento-list.component';
import { AtendimentoFormComponent } from './components/atendimento-form/atendimento-form.component';
import { AtendimentoShowComponent } from './components/atendimento-show/atendimento-show.component';

const routes: Routes = [
  { path: 'show', component: AtendimentoShowComponent },
  { path: 'list', component: AtendimentoListComponent },
  { path: 'new', component: AtendimentoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
