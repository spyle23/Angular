import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '../model/client.model';
import { liste } from '../model/liste';

@Injectable({
  providedIn: 'root'
})
export class LoanListService {
  _listePret = new BehaviorSubject(liste);
  listePret$ = this._listePret.asObservable();
  constructor() { }

  getAllliste(): Observable<Client[]>{
    return this.listePret$
  }
}
