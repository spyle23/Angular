import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { liste } from 'src/app/@shared/model/liste';
import { Client, DatasClient } from '../model/Responsable.model';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  datas: DatasClient = {
    responsibles: [
      {
        id: 1,
        firstName: 'Andriatiana',
        lastName: 'Jean-Marie',
      },
      { id: 2, 
        firstName: 'Andrianarivony', 
        lastName: 'Fanirintsoa Harijaona' 
      },
      { id: 3, 
        firstName: 'Razafitsalama', 
        lastName: 'Tsiorimbola Marius' 
      },
      {
        id: 4,
        firstName: 'Rasolofoniaina',
        lastName: 'Filamatra Manampy Fanantenana',
      },
      { id: 5, firstName: 'Andrimiadanjato', lastName: 'Miora' },
    ],
    clients:[
      {
        id:7,
        companyName:"Client 1"
      },
      {
        id:8,
        companyName:"Client 2"
      }
    ],
    paymentsMethods:[
      {
        id:9,
        label:"Mvola"
      },
      {
        id:10,
        label:"Airtel Money"
      }
    ],
    frequencesRemboursement:[
      {
        id:13,
        interval:"mensuel"
      },
      {
        id:14,
        interval:"bimestriel"
      }
    ]
  };
  constructor() {}
  getPageCreateData(): Observable<any> {
    return new Observable((observer) => {
      observer.next(this.datas);
    });
  }
  createLoan(data: {responsible:string, client:string, amount:number, percentage:number, repaymentFrequency:string, loanDate:Date, repaymentEndDate:Date, benefitPaymentMethod:string, capitalPaymentMethod:string, remark:string}): Observable <any>{
   return new Observable(observer =>{
     observer.next(data);
     const clientTemp = {
      client:data.responsible,
      montantPret:data.amount,
      datePret:data.loanDate,
      finContrat:data.repaymentEndDate,
      pourcentage:data.percentage, 
      montantInteret:(data.amount*data.percentage/100),
      modePayement:data.capitalPaymentMethod
     }
     liste.unshift(clientTemp);
   }); 
  }
}
