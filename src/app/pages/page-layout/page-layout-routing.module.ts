import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { PageLayoutComponent } from './page-layout.component';

const routes: Routes = [
  {path:'', component:PageLayoutComponent},
  {path:'loan',loadChildren: () => import('../page-loan/page-loan.module').then(m => m.PageLoanModule)},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }
