import { Injectable, Input } from '@angular/core';
import { BreadCrumb } from '../model/breadCrumb.model';
import { Menu } from '../model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
    myBreadCrumbs:BreadCrumb[] =[
    {content: 'Accueil', path:''}
  ];
  getBread(): any[]{
    return this.myBreadCrumbs;
  }

  modify(menu: Menu, i: number): void{
    i===1? this.myBreadCrumbs.push(menu) : this.myBreadCrumbs.splice(1,1,menu);   
  }
  delete(index: number): void{
    this.myBreadCrumbs.splice(index+1);
  }  
  constructor() { }
}
