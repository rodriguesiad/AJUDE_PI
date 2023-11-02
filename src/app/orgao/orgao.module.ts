import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgaoRoutingModule } from './orgao-routing.module';
import { OrgaoListComponent } from './components/orgao-list/orgao-list.component';


@NgModule({
  declarations: [
    OrgaoListComponent
  ],
  imports: [
    CommonModule,
    OrgaoRoutingModule
  ],
  exports: [
    OrgaoListComponent
  ]
})
export class OrgaoModule { }
