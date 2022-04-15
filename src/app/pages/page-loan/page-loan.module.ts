import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoanRoutingModule } from './page-loan-routing.module';
import { LoanModule } from 'src/app/features/loan/loan.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    PageLoanRoutingModule,
    LoanModule
  ],
  exports:[
    BreadcrumbComponent
  ]
})
export class PageLoanModule { }
