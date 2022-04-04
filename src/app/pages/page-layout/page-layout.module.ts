import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from 'src/app/features/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
  ]
})
export class PageLayoutModule { }
