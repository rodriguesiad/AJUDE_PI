import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoListComponent } from './components/atendimento-list/atendimento-list.component';
import { AtendimentoFormComponent } from './components/atendimento-form/atendimento-form.component';

const routes: Routes = [
  { path: 'list', component: AtendimentoListComponent},
  { path: 'new', component: AtendimentoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
