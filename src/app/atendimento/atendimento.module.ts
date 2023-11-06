import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { AtendimentoShowComponent } from './components/atendimento-show/atendimento-show.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatTabsModule } from "@angular/material/tabs";
import { BeneficiarioModule } from "../beneficiario/beneficiario.module";
import { EncaminhamentoListComponent } from "../encaminhamento/components/encaminhamento-list/encaminhamento-list.component";
import { MovimentacaoListComponent } from "../movimentacao/components/movimentacao-list/movimentacao-list.component";
import { EncaminhamentoFormComponent } from "../encaminhamento/components/encaminhamento-form/encaminhamento-form.component";
import { MovimentacaoFormComponent } from "../movimentacao/components/movimentacao-form/movimentacao-form.component";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AtendimentoListComponent } from './components/atendimento-list/atendimento-list.component';
import { AtendimentoFormComponent } from './components/atendimento-form/atendimento-form.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AtendimentoShowComponent,
    EncaminhamentoListComponent,
    MovimentacaoListComponent,
    EncaminhamentoFormComponent,
    MovimentacaoFormComponent,
    AtendimentoListComponent,
    AtendimentoFormComponent
  ],
  imports: [
    CommonModule,
    AtendimentoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,
    BeneficiarioModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatFormFieldModule,
  ]
})
export class AtendimentoModule {
}


