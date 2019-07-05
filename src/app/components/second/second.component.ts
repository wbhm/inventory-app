import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Product } from '../../models'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  title:string;
  productList:Product[];

  constructor(private route:ActivatedRoute) { 
    //console.log(route.data);
    this.title = route.root.firstChild.snapshot.data['title'];
    this.productList = route.root.firstChild.snapshot.data['productList'];
  }

  ngOnInit() {
  }

}
