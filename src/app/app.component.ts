import { Component } from '@angular/core';
import { Product } from './models';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products:Product[];

  constructor(){

  }
}
