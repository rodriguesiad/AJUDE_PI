import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgaoListComponent } from './components/orgao-list/orgao-list.component';
import { OrgaoFormComponent } from './components/orgao-form/orgao-form.component';
import { orgaoResolver } from './resolver/orgao-resolver';

const routes: Routes = [
  { path: 'list', component: OrgaoListComponent },
  {path: 'new', component: OrgaoFormComponent },
  {path: 'edit/:id', component: OrgaoFormComponent, resolve: { orgao: orgaoResolver }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgaoRoutingModule { } 
