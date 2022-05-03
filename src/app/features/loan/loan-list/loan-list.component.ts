import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/@shared/model/client.model';
import { liste } from 'src/app/@shared/model/liste';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {
  listePret: Client[] = liste;
  constructor() { }

  ngOnInit(): void {
  }

}
