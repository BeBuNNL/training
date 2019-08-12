import { Component, OnInit } from '@angular/core';
import { PRODUCTS, product } from '../app.component'
import { Observable } from 'rxjs'
import { switchMap, filter } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../product.service'
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // products = PRODUCTS;
  products$: Observable<product[]>;
  selectedProduct: string;
  imgUrl = 'https://www.w3schools.com/bootstrap/la.jpg';
  constructor(
    private route: ActivatedRoute,
    private service: ProductService
  ) {}

  ngOnInit() {
    this.products$ = this.route.paramMap.pipe(
      switchMap(x=>{
        this.selectedProduct = x.get('name');
        return this.service.getProducts();
      })
    )
  }

  // onSelect(product: product): void{
  //   this.selectedProduct = product;
  // }

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