import { Injectable, Input } from '@angular/core';
import { Menu } from '../model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  @Input() menus:Menu[] = [
    {content:"Liste des prets", path:'loan/list'},
    {content:"Enregistrer un nouveau pret", path:'loan/create'},
    {content:"Calendrier de remboursement", path:'loan/calendar'},
  ]
  constructor() { }
  getAllMenu(): Menu[]{
    console.log(this.menus);
    return this.menus;
  }
  getMenu(index: number): Menu{
    console.log(this.menus);
    return this.menus[index];
  }

}
