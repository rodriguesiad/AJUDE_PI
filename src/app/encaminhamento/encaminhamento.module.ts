import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EncaminhamentoRoutingModule } from './encaminhamento-routing.module';
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    EncaminhamentoRoutingModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class EncaminhamentoModule {
}
