import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatasClient } from '../model/Responsable.model';

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
}
