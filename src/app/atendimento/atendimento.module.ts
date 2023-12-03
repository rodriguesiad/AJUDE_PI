import { CommonModule, registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatOptionModule } from "@angular/material/core";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from '@angular/material/toolbar';
import { BeneficiarioModule } from "../beneficiario/beneficiario.module";
import { EncaminhamentoFormComponent } from "../encaminhamento/components/encaminhamento-form/encaminhamento-form.component";
import { EncaminhamentoListComponent } from "../encaminhamento/components/encaminhamento-list/encaminhamento-list.component";
import { EncaminhamentoDownloadModalComponent } from '../encaminhamento/components/modal/encaminhamento-download-modal/encaminhamento-download-modal.component';
import { MovimentacaoDownloadModalComponent } from '../movimentacao/components/modal/movimentacao-download-modal/movimentacao-download-modal.component';
import { MovimentacaoFormComponent } from "../movimentacao/components/movimentacao-form/movimentacao-form.component";
import { MovimentacaoListComponent } from "../movimentacao/components/movimentacao-list/movimentacao-list.component";
import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { AtendimentoFormComponent } from './components/atendimento-form/atendimento-form.component';
import { AtendimentoListComponent } from './components/atendimento-list/atendimento-list.component';
import { AtendimentoShowComponent } from './components/atendimento-show/atendimento-show.component';
import { AtendimentoDownloadModalComponent } from './components/modal/atendimento-download-modal/atendimento-download-modal.component';

registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    AtendimentoShowComponent,
    EncaminhamentoListComponent,
    MovimentacaoListComponent,
    MovimentacaoDownloadModalComponent,
    EncaminhamentoFormComponent,
    EncaminhamentoDownloadModalComponent,
    MovimentacaoFormComponent,
    AtendimentoListComponent,
    AtendimentoFormComponent,
    AtendimentoDownloadModalComponent
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
    MatDatepickerModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class AtendimentoModule {
}

