import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgaoListComponent } from './components/orgao-list/orgao-list.component';

const routes: Routes = [
  { path: 'list', component: OrgaoListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgaoRoutingModule { }
