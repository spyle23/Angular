import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';





@NgModule({
  declarations: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule
  ]
})
export class PageLayoutModule { }
