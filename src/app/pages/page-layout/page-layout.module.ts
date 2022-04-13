import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from 'src/app/features/header/header.component';
import { SideMenuComponent } from 'src/app/features/side-menu/side-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PageLayoutComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
  ]
})
export class PageLayoutModule { }
