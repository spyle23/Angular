import { Injectable, Input } from '@angular/core';
import { BreadCrumb } from '../model/breadCrumb.model';
import { Menu } from '../model/menu.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
    myBreadCrumbs:BreadCrumb[] =[
    {content: 'acceuil', path:''}
  ];
  getBread(): any[]{
    return this.myBreadCrumbs;
  }
  replace(menu:Menu): void{
    this.myBreadCrumbs[1].content = menu.content;
    this.myBreadCrumbs[1].path = menu.path; 
  }
  modify(menu: Menu, i: number): void{
    i===1? this.myBreadCrumbs.push(menu) : this.replace(menu);  
  }
  delete(index: number): void{
    this.myBreadCrumbs.splice(index+1);
  }  
  constructor() { }
}
