import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { product } from '../app.component';
import { switchMap, map, tap, mapTo, scan } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  imgUrl = 'https://www.w3schools.com/bootstrap/la.jpg';
  product$: Observable<product>;
  selectedVote: any;
  countSP: any;
  data: any;
  nameUser: any;
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

     this.data = new Observable(x=>{
      x.next(0);
      x.complete();
    }).pipe(
      tap(x=>x)
    ).subscribe(x=>{this.countSP = x});
  }

  ngAfterViewInit() {
    // let addEv = document.getElementById('add');
    // let subEv = document.getElementById('sub');
    // fromEvent(addEv, 'click').pipe(
    //   scan(count=>count+1,0)
    // ).subscribe();
    // console.log(this.countSP);
  }

  gotoProducts(){
    this.router.navigate(['/product']);
  }

  addtoCart(productx: product, x: number){
    this.router.navigate(['/addtocart'], {queryParams: {pd: productx.name, 'ns': x}});
  }

  // addtoCart(productx: product){
  //   this.router.navigate(['/addtocart'], {queryParams: {pd: productx.name}});
  // }
}
