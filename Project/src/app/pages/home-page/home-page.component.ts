import { Component, OnInit } from '@angular/core';
import { FilterBtn, Filter } from '../../models/filterInHomepage.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { Product } from 'src/app/models/products.model';
import { ProductService } from 'src/app/services/product.service';

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

  products$: Observable<Product[]>;


  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.products$ = this.productService.products$;
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['Prev','Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      960: {
        items: 4
      }
    },
    nav: true,
    margin: 10,
  }
}
