import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AtendimentoShowComponent} from "./components/atendimento-show/atendimento-show.component";

const routes: Routes = [
  {path: 'show', component: AtendimentoShowComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule {
}
