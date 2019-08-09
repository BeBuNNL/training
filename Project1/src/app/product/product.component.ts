import { Component, OnInit } from '@angular/core';
import { PRODUCTS, product } from '../app.component'
import { Observable } from 'rxjs'
import { switchMap, filter } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../product.service'

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

}
