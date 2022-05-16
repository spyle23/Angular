import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Responsable } from 'src/app/core/model/Responsable.model';
import { PayementService } from 'src/app/core/service/payement.service';
import { ResponsableService } from 'src/app/core/service/responsable.service';

@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.scss']
})
export class LoanCreateComponent implements OnInit {
  responsables!: Responsable[];
  modePayements!:string[];
  modeRemboursements!:string[];
  formulaire!:FormGroup;
  constructor(private builder: FormBuilder, private responsableService: ResponsableService, private payementService: PayementService) { }

  ngOnInit(): void {
    this.responsables = this.responsableService.getResponsables();
    this.modePayements = this.payementService.getModePayements();
    this.modeRemboursements = this.payementService.getModeRemboursements();

    this.formulaire = this.builder.group({
      responsable:[null, [Validators.required]],
      montantPret:[null, [Validators.required]],
      pourcentage:[null, [Validators.required]],
      datePret:[null, [Validators.required]],
      dateRemboursement:[null, [Validators.required]],
      modePayementCap:[null, [Validators.required]],
      modePayementInt:[null, [Validators.required]],
      modeRemboursement:[null, [Validators.required]],
      commentaire:null
    })
  }
  onSubmit(): void{
    console.log(this.formulaire.value);
  }

}
