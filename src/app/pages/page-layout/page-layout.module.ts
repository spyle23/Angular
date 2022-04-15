import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';

import { PageLoanModule } from '../page-loan/page-loan.module';
import { LayoutModule } from 'src/app/features/layout/layout.module';



@NgModule({
  declarations: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    PageLoanModule
  ]
})
export class PageLayoutModule { }
