import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiarioRoutingModule } from './beneficiario-routing.module';
import { BeneficiarioListComponent } from './components/beneficiario-list/beneficiario-list.component';


@NgModule({
  declarations: [
    BeneficiarioListComponent
  ],
  imports: [
    CommonModule,
    BeneficiarioRoutingModule
  ],
  exports: [
    BeneficiarioListComponent
  ]
})
export class BeneficiarioModule { }
