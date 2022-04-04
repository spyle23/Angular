import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoanRoutingModule } from './page-loan-routing.module';
import { PageLoanComponent } from './page-loan.component';
import { LoanModule } from 'src/app/features/loan/loan.module';


@NgModule({
  declarations: [
    PageLoanComponent
  ],
  imports: [
    CommonModule,
    PageLoanRoutingModule,
    LoanModule
  ]
})
export class PageLoanModule { }
