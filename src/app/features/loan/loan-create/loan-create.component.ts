
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { DatasClient } from 'src/app/core/model/Responsable.model';
import { LoanService } from 'src/app/core/service/loan.service';




@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.scss']
})
export class LoanCreateComponent implements OnInit {
  datas$!:Observable<any>;
  datasResponsables!:DatasClient;
  formulaire!:FormGroup;
  constructor(private builder: FormBuilder, private loanService: LoanService, private router: Router) { }

  ngOnInit(): void {
    this.datas$ = this.loanService.getPageCreateData().pipe(
      tap(valeur => console.log(valeur))
    );

    this.formulaire = this.builder.group({
      responsible:[null, [Validators.required]],
      client:[null, [Validators.required]],
      amount:[null, [Validators.required, Validators.min(0)]],
      percentage:[null, [Validators.required, Validators.min(0)]],
      loanDate:[null, [Validators.required]],
      repaymentEndDate:[null, [Validators.required]],
      benefitPaymentMethod:[null, [Validators.required]],
      capitalPaymentMethod:[null, [Validators.required]],
      repaymentFrequency:[null, [Validators.required]],
      remark:null
    })
  }
  onSubmit(): void{
    this.loanService.createLoan(this.formulaire.value).pipe(
      tap(()=> this.router.navigate(['/loan/list']))
    )
    .subscribe();
  }

}
