import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EncaminhamentoRoutingModule} from './encaminhamento-routing.module';
import {MatInputModule} from "@angular/material/input";
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EncaminhamentoRoutingModule,
    MatInputModule,
    SharedModule
  ]
})
export class EncaminhamentoModule {
}
