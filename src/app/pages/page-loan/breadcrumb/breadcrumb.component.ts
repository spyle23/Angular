import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadCrumb } from 'src/app/@shared/model/breadCrumb.model';
import { Menu } from 'src/app/@shared/model/menu.model';
import { BreadcrumbsService } from 'src/app/@shared/Services/breadcrumbs.service';
import { ServiceService } from 'src/app/@shared/Services/service.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadCrumbs!:BreadCrumb[];
  @Input() menuIndex!:Menu;
  constructor(private service:ServiceService, public breadcrumb: BreadcrumbsService, private route: ActivatedRoute) { }

  ngOnInit(): void {     
    this.breadCrumbs = this.breadcrumb.getBread();
    console.log(this.route.url)
  }
  onClick(index: number, event: any): void{
      event.stopPropagation();
      this.breadcrumb.delete(index);
  }

}
