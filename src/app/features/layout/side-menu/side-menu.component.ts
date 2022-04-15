import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/@shared/model/menu.model';
import { BreadcrumbsService } from 'src/app/@shared/Services/breadcrumbs.service';
import { ServiceService } from 'src/app/@shared/Services/service.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  i!:number;
  @Input() sideMenus!: Menu[];
  @Input() menuByIndex!:Menu;
  constructor(private router:Router, private service:ServiceService, private breadcrumb: BreadcrumbsService) { }

  ngOnInit(): void {
    this.i=0;
    this.sideMenus = this.service.getAllMenu();
  }
  onClick(index: number): void{
    this.i++;
    this.router.navigate([this.sideMenus[index].path]);
    this.menuByIndex = this.service.getMenu(index);
    this.breadcrumb.modify(this.menuByIndex, this.i);
  }

}
