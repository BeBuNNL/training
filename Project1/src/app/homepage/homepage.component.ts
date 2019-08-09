import { Component, OnInit } from '@angular/core';
import { PRODUCTS, product } from '../app.component'
import { Observable } from 'rxjs'
import { switchMap, filter } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../product.service'

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

}
