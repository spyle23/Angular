import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hide!:boolean;
  isActive!:boolean;
  constructor() { }

  ngOnInit(): void {
    this.hide = true;
    this.isActive = false;
  }


  hidden(){

    this.isActive=!this.isActive;
    this.hide=!this.hide;
  }

}
