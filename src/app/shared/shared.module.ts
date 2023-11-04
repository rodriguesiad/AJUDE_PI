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
import { FooterComponent } from './components/footer/footer.component';
import { TabSelectionComponent } from './components/tab-selection/tab-selection.component';
import { RouterModule } from '@angular/router';
import {NgFor} from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TabSelectionComponent,
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
    RouterModule,
    NgFor,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TabSelectionComponent
  ]
})
export class SharedModule { }
