import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/@shared/model/client.model';
import { liste } from 'src/app/@shared/model/liste';
import { trigger, style, keyframes, transition, animate, query, stagger } from "@angular/animations";


@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss'],
  animations:[
    trigger('listAnimation', [
      transition('*=>*', [
        query(':enter', style({opacity: 0}), {optional:true}),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity:0, transform:'translateY(-75px)', offset:0}),
            style({opacity:0.5, transform:'translateY(35px)', offset:0.3}),
            style({opacity:1, transform:'translateY(0px)', offset:1})
          ]))
        ]))
      ])
    ])
  ]
    
})
export class LoanListComponent implements OnInit {
  listePret: Client[] = liste;
  position!:number;
  tableSize: number=3;
  count:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.position= 1;
  }

  onTableChange(event: any): void{
    this.position = event;
  }
  onTableSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.position = 1;
  }

}
