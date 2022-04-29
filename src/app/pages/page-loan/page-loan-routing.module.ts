import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanCalendarComponent } from 'src/app/features/loan/loan-calendar/loan-calendar.component';
import { LoanCreateComponent } from 'src/app/features/loan/loan-create/loan-create.component';
import { LoanListComponent } from 'src/app/features/loan/loan-list/loan-list.component';


const routes: Routes = [
  {path:'list', component:LoanListComponent},
  {path:'create', component:LoanCreateComponent},
  {path:'calendar', component:LoanCalendarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLoanRoutingModule { }
