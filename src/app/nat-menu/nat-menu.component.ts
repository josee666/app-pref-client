import { Component, OnInit } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NatCard} from  '../NatCard'

@Component({
  selector: 'app-nat-menu',
  templateUrl: './nat-menu.component.html',
  styleUrls: ['./nat-menu.component.scss']
})
export class NatMenuComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  accueilIsOn = true;
  cardIsOn = false;
  loginIsOn=false;

  listCard;
  avatar;


  listCardKitchen = [
    {
      path: './assets/photo/cuisine1.jpg',
      title: 'titre photo 1',
      desc: 'une petite description de la photo 1'
    }, 
    {
      path: './assets/photo/cuisine2.jpg',
      title: 'titre photo 2',
      desc: 'une petite description de la photo 2'
    },
    {
      path: '/assets/photo/cuisine3.jpg',
      title: 'titre photo 3',
      desc: 'une petite description de la photo 3'
    }
  ];
  
  listCardBathtub = [
    {
      path: './assets/photo/salle_bain1.jpg',
      title: 'titre photo 1',
      desc: 'une petite description de la photo 1'
    }, 
    {
      path: './assets/photo/salle_bain2.jpg',
      title: 'titre photo 2',
      desc: 'une petite description de la photo 2'
    },
    {
      path: './assets/photo/salle_bain3.jpg',
      title: 'titre photo 3',
      desc: 'une petite description de la photo 3'
    }
  ];

    constructor() { }
    
    ngOnInit() {
    }

    onClicBackHome(){
      this.accueilIsOn = true;
      this.cardIsOn = false;
      this.loginIsOn = false;
    }

    onClicKitchen(){

      this.accueilIsOn = false;
      this.cardIsOn = true;
      this.listCard = this.listCardKitchen;
      this.avatar = 'kitchen'
      this.loginIsOn = false;
    }


  onClicBathtub(){
    this.accueilIsOn = false;
    this.cardIsOn = true;
    this.listCard = this.listCardBathtub;
    this.avatar = 'bathtub'
    this.loginIsOn = false;
  }

  onClicLogin(){
    this.accueilIsOn = false;
    this.cardIsOn = false;
    this.loginIsOn = true;
    this.listCard = [];
    this.avatar = 'account_box'
  }

}
