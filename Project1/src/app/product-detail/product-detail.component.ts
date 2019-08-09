import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { product } from '../app.component';
import { switchMap, pluck, map } from 'rxjs/operators';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  imgUrl = 'https://www.w3schools.com/bootstrap/la.jpg';
  product$: Observable<product>;
  selectedVote: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) { }

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap((x: ParamMap)=>this.service.getProduct(x.get('key')))
    );

    this.selectedVote = this.product$.pipe(
      map(x=>{return x.vote})
    ).subscribe(console.log)
  }

  gotoProducts(){
    this.router.navigate(['/product']);
  }

  addtoCart(productx: product, x: number){
    this.router.navigate(['/addtocart'], {queryParams: {pd: productx.name, 'ns': x}});
  }
}
