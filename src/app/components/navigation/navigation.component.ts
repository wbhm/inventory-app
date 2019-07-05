import { Component, OnInit, Input } from '@angular/core';
import { Product} from '../../models'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() menuList:Product[];
  constructor() { 

  }

  ngOnInit() {
  }

}
