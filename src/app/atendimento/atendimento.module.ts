import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { AtendimentoListComponent } from './components/atendimento-list/atendimento-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AtendimentoFormComponent } from './components/atendimento-form/atendimento-form.component';


@NgModule({
  declarations: [
    AtendimentoListComponent,
    AtendimentoFormComponent
  ],
  imports: [
    CommonModule,
    AtendimentoRoutingModule,
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
    MatButtonModule
  ]
})
export class AtendimentoModule { }
