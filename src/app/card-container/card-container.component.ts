import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material'
import { CardService } from '../services/card-service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})

export class CardContainerComponent implements OnInit {
  
  @Input() avatar:string; 
  @Input() listCard:any[];
  @Input() cardType:string;
  
  constructor(private cardService:CardService) { }

  ngOnInit() {
    this.listCard = this.cardService.getListFromType(this.cardType)
  }

  ngOnDestroy(){
    // this.save()

  }
  


}
