import { Component, OnInit } from '@angular/core';
import { FilterBtn, Filter } from '../../models/filterInHomepage.model'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  filterButtons: FilterBtn[] = [
    {type: Filter.all, label: 'All Product', isActive: true},
    {type: Filter.hot, label: 'Hot Product', isActive: false},
    {type: Filter.bestSellers, label: 'Best Sellers Product', isActive: false},
  ]
  constructor() { }

  ngOnInit() {
  }

}
