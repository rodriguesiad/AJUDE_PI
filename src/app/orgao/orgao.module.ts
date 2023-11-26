import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { OrgaoRoutingModule } from './orgao-routing.module';
import { OrgaoListComponent } from './components/orgao-list/orgao-list.component';
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
import { OrgaoFormComponent } from './components/orgao-form/orgao-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import localePtBr from '@angular/common/locales/pt';

registerLocaleData(localePtBr);


@NgModule({
  declarations: [
    OrgaoListComponent,
    OrgaoFormComponent
  ],
  imports: [
    CommonModule,
    OrgaoRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSlideToggleModule
  ],
  exports: [
    OrgaoListComponent
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class OrgaoModule { } 
