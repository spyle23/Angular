import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports:[
    HeaderComponent,
    SideMenuComponent
  ]
})
export class LayoutModule { }
