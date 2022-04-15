import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './features/layout/layout.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoanModule } from './features/loan/loan.module';
import { PageLoanModule } from './pages/page-loan/page-loan.module';





@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    PageLoanModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
