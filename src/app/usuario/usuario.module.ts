import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';


@NgModule({
  declarations: [
    UsuarioListComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  exports: [
    UsuarioListComponent
  ]
})
export class UsuarioModule { }
