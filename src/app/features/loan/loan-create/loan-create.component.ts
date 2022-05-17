
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private builder: FormBuilder, private loanService: LoanService) { }

  ngOnInit(): void {
    this.datas$ = this.loanService.getPageCreateData().pipe(
      tap(valeur => console.log(valeur))
    );

    this.formulaire = this.builder.group({
      responsible:[null, [Validators.required]],
      client:[null, [Validators.required]],
      montantPret:[null, [Validators.required, Validators.min(0)]],
      pourcentage:[null, [Validators.required]],
      datePret:[null, [Validators.required]],
      dateRemboursement:[null, [Validators.required]],
      modePaiement:[null, [Validators.required]],
      modeRemboursement:[null, [Validators.required]],
      frequenceRemboursement:[null, [Validators.required]],
      commentaire:null
    })
  }
  onSubmit(): void{
    console.log(this.formulaire.value);
  }

}
