import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './page-layout.component';

const routes: Routes = [
  {path:'', component:PageLayoutComponent, children:[
    {path:'loan', loadChildren: () => import('../page-loan/page-loan.module').then(m => m.PageLoanModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }
