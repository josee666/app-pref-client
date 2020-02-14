import { Component, OnInit, Input } from '@angular/core';
import { NatCard} from '../natCard'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-nat-card',
  templateUrl: './nat-card.component.html',
  styleUrls: ['./nat-card.component.scss']
})
export class NatCardComponent implements OnInit {

  // maCard = {
  //   path:"../assets/photo/armoire1.jpg",
  //   title:"titre photo 1",
  //   desc:"une petite description de la photo"
  //   }

    @Input() path:string;
    @Input() index:number;
    @Input() title:string;
    @Input() desc:string;
    @Input() avatar:string;
    @Input() cardType:string;
    @Input() like:boolean = false;
		@Input() comment:string = '';
    
    color_like_but = "black";

  constructor() { }


  ngOnInit() {
  }
// saveComment(){
//   console.log('save')
// }

onClickLike(){
	console.log('like')
	if (!this.like){
		this.color_like_but = "orangered"
		this.like = true
	}else{
		this.color_like_but = "black"
		this.like = false
	}


}

}
