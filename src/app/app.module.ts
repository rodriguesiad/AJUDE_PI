import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedService } from "./shared/services/shared.service";
import { ReadonlySelectDirective } from './directives/readonly-select.directive';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ReadonlySelectDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
