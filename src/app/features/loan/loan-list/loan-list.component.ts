import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/@shared/model/client.model';

import { trigger, style, keyframes, transition, animate, query, stagger } from "@angular/animations";
import { FormControl } from '@angular/forms';
import { LoanListService } from 'src/app/@shared/Services/loan-list.service';
import { debounceTime, Observable, tap } from 'rxjs';


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
  listePrets!:Client[];
  listePret$!:Observable <string>
  position!:number;
  tableSize: number=5;
  count:number = 0;


  search:FormControl= new FormControl(null);
  constructor(private loanListeService: LoanListService) { }

  ngOnInit(): void {
    this.position= 1;
    this.postListe();
    this.onValueChanges();
  }

  onValueChanges():void{
    this.listePret$ = this.search.valueChanges.pipe(
      debounceTime(300),
      tap((valueInput => {
        if (valueInput==="") {
          this.postListe();
          return;
        }
        this.loanListeService.getAllliste().pipe(
          tap(listes => {
            this.listePrets=listes.filter(client => client.client===valueInput);
          })
        )
        .subscribe()
      }))
    );
    this.listePret$.subscribe();
  }

  postListe(): void{
    this.loanListeService.getAllliste().subscribe(value => {
      this.listePrets = value;
    })
  }

  onTableChange(event: any): void{
    this.position = event;
    this.loanListeService.getAllliste();
  }
  onTableSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.position = 1;
    this.loanListeService.getAllliste();
  }

  onSearch():void{
    this.loanListeService.getAllliste()
    .pipe(
      tap(value => {
        this.listePrets = value.filter(client => client.client===this.search.value)
      })
    )
    .subscribe();
  }

}
