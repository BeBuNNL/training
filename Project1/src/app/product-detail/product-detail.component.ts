import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable, fromEvent } from 'rxjs';
import { product } from '../app.component';
import { switchMap, map, tap } from 'rxjs/operators';

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
  count: number = 0;
  newPrice: number = 0;

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
    let addEv = document.getElementById('add');
    let subEv = document.getElementById('sub');
    let out = document.getElementById('out');

    fromEvent(addEv, 'click').pipe(
    ).subscribe(x=>{
      this.count += 1;
      out.innerHTML = this.count.toString()
    });

    fromEvent(subEv, 'click').pipe(
    ).subscribe(x=>{
      this.count += -1;
      if (this.count === -1){
        this.count = 0;
      }
      out.innerHTML = this.count.toString()
    });

    this.product$.subscribe(x=>{
      this.newPrice = ~~((x.price - x.price*x.discount/100)*100)/100
    })
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