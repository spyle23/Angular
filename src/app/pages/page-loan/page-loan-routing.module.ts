import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanCreateComponent } from 'src/app/features/loan-create/loan-create.component';
import { LoanListComponent } from 'src/app/features/loan-list/loan-list.component';
import { PageLoanComponent } from './page-loan.component';

const routes: Routes = [{ path: '', component: PageLoanComponent },
  {path:'liste', component:LoanListComponent},
  {path:'create', component:LoanCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLoanRoutingModule { }
