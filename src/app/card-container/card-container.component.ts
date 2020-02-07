import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})

export class CardContainerComponent implements OnInit {
  
  @Input() avatar:string; 
  @Input() listCard:[];
  // listCard = [
  //   {
  //     path: '../../assets/photo/armoire1.jpg',
  //     title: 'titre photo 1',
  //     desc: 'une petite description de la photo 1'
  //   }, 
  //   {
  //     path: '../../assets/photo/armoire1.jpg',
  //     title: 'titre photo 2',
  //     desc: 'une petite description de la photo 2'
  //   }
  // ];

  constructor() { }

  ngOnInit() {
    
  }

}
