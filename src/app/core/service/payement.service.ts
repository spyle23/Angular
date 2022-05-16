import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayementService {
  modePayements: string[] = ["virement bancaire", "Mvola", "Orange Money", "Airtel Money"];
  modeRemboursements: string[] = ["mensuel", "bimestriel"]
  constructor() { }

  getModePayements(): string[]{
    return this.modePayements;
  }
  getModeRemboursements(): string[]{
    return this.modeRemboursements;
  }
}
