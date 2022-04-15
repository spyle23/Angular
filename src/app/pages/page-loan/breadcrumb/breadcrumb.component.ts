import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadCrumbs!:any[];
  constructor() { }

  ngOnInit(): void {
    this.breadCrumbs = [
      {menu: 'acceuil', path:''},
      {menu:'Enregistrement d\'un pret', path:'/loan/create'},
      {menu:'liste des prets', path:'/loan/liste'}
    ]
  }
  onClick(index: number, event: any): void{
    event.preventDefault(); 
    this.breadCrumbs.splice(index+1);
    console.log(this.breadCrumbs);
    
  }

}
