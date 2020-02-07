import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pref-client';
  mesCards = [
    {
      path:"../assets/photo/armoire0.jpg",
      title:"titre photo 0"
    },
    {
      path:"../assets/photo/armoire1.jpg",
      title:"titre photo 1"
  }
]

}
