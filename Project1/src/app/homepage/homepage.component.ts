import { Component, OnInit } from '@angular/core';
import { PRODUCTS, product } from '../app.component'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../product.service'
import { OwlOptions } from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  hotProducts$: Observable<product[]>;
  bestsaleProducts$: Observable<product[]>;
  selectedProduct: string;
  imgUrl = 'https://www.w3schools.com/bootstrap/la.jpg';

  constructor(
    private route: ActivatedRoute,
    private service: ProductService
  ) { }

  ngOnInit() {
    this.hotProducts$ = this.route.paramMap.pipe(
      switchMap(()=>{
        return this.service.gethotProduct();
      })
    ),

    this.bestsaleProducts$ = this.route.paramMap.pipe(
      switchMap(()=>{
        return this.service.getbestsaleProduct();
      })
    )
    console.log(this.bestsaleProducts$)
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
        items: 3
      }
    },
    nav: true,
    margin: 10,
  }
}
