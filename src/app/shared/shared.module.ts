import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BeneficiarioModule } from '../beneficiario/beneficiario.module';
import { OrgaoModule } from '../orgao/orgao.module';
import { UsuarioModule } from '../usuario/usuario.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    BeneficiarioModule,
    OrgaoModule,
    UsuarioModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
