import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title: string;
  constructor(private route:ActivatedRoute) { 
    //console.log(route.data);
    this.title = route.root.firstChild.snapshot.data['title'];
  }

  ngOnInit() {

  }
}
