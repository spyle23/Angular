import { Component, OnInit } from '@angular/core';
import { FaceSnaps } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap!:FaceSnaps;

  ngOnInit(): void {
    this.mySnap = new FaceSnaps('Archibald',
    'Mon meilleur ami depuis tout petit !',
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    new Date(),
    0)
  }
}
