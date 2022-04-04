import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoanCreateComponent } from './features/loan-create/loan-create.component';
import { LoanListComponent } from './features/loan-list/loan-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoanCreateComponent,
    LoanListComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
