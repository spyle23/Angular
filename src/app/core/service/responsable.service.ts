import { Injectable, Input } from '@angular/core';
import { Responsable } from '../model/Responsable.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  @Input() myResponsables: Responsable[] = [
    {id:1,firstName:"Andriatiana", lastName:"Jean-Marie"},
    {id:2,firstName:"Andrianarivony", lastName:"Fanirintsoa Harijaona"},
    {id:3,firstName:"Razafitsalama", lastName:"Tsiorimbola Marius"},
    {id:4,firstName:"Rasolofoniaina", lastName:"Filamatra Manampy Fanantenana"},
    {id:5,firstName:"Andrimiadanjato", lastName: "Miora"}
  ]
  constructor() { }

  getResponsables(): Responsable[]{
    return this.myResponsables;
  }
}
