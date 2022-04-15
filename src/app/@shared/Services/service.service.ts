import { Injectable, Input } from '@angular/core';
import { Menu } from '../model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  @Input() menus:Menu[] = [
    {content:"liste des prets", path:'loan/liste'},
    {content:"Enregistrer un nouveau pret", path:'loan/create'},
    {content:"calendrier de remboursement", path:''},
  ]
  constructor() { }
  getAllMenu(): Menu[]{
    console.log(this.menus);
    return this.menus;
  }
  getMenu(index: number): Menu{
    console.log(this.menus[index]);
    return this.menus[index];
  }

}
