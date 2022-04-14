import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from 'src/app/features/layout/header/header.component';
import { SideMenuComponent } from 'src/app/features/layout/side-menu/side-menu.component';
import { PageLoanModule } from '../page-loan/page-loan.module';



@NgModule({
  declarations: [
    HeaderComponent,
    PageLayoutComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    PageLoanModule
  ]
})
export class PageLayoutModule { }
