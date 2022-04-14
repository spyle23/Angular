import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanCreateComponent } from '../loan/loan-create/loan-create.component';

const routes: Routes = [
  {path:'create', component:LoanCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
