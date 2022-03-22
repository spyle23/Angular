import { Component,Input ,OnInit } from '@angular/core';
import { FaceSnaps } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class AppSnapComponent implements OnInit {

  @Input() faceSnaps!: FaceSnaps;
  title!:string;
  description!:string;
  imageUrl!:string;
  createdDate!:Date;
  snaps!:number;  

  ngOnInit(): void {
    this.title ="Archibal";
    this.description = "Mon meilleur ami depuis tout petit";
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    this.createdDate = new Date();
    this.snaps = 0;
  }

}
