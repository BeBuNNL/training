import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { product } from '../app.component';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) { }

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap((x: ParamMap)=>this.service.getProduct(x.get('key')))
    );
  }

  gotoProducts(){
    this.router.navigate(['/product']);
  }
}
