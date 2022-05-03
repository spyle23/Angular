import { Injectable, Input } from '@angular/core';
import { Responsable } from '../model/Responsable.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  @Input() myResponsables: Responsable[] = [
    {firstName:"Andriatiana", lastName:"Jean-Marie"},
    {firstName:"Andrianarivony", lastName:"Fanirintsoa Harijaona"},
    {firstName:"Razafitsalama", lastName:"Tsiorimbola Marius"},
    {firstName:"Rasolofoniaina", lastName:"Filamatra Manampy Fanantenana"},
    {firstName:"Andrimiadanjato", lastName: "Miora"}
  ]
  constructor() { }

  getResponsables(): Responsable[]{
    return this.myResponsables;
  }
}
