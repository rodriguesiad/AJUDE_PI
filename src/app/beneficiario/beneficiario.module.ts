import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiarioRoutingModule } from './beneficiario-routing.module';
import { BeneficiarioListComponent } from './components/beneficiario-list/beneficiario-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { BeneficiarioFormComponent } from './components/beneficiario-form/beneficiario-form.component';
import { BeneficiarioViewComponent } from './components/beneficiario-view/beneficiario-view.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { SharedModule } from '../shared/shared.module';

registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    BeneficiarioListComponent,
    BeneficiarioFormComponent,
    BeneficiarioViewComponent
  ],
  imports: [
    CommonModule,
    BeneficiarioRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    SharedModule
      ],
  exports: [
    BeneficiarioListComponent,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class BeneficiarioModule { }
