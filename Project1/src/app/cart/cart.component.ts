import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service'
import { AppComponent, product } from '../app.component'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {
  imgUrl = 'https://www.w3schools.com/bootstrap/la.jpg';
  orderObj: any;
  product$: Observable<product>;
  pd: string;
  np: number;
  nameUser: string;
  tBill: number;
  fBill: string;
  info: string[];
  cookieArray: cok[] = [];


  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private cookie: CookieService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.pd = params.pd;
      this.np = params.ns;
    })
    this.product$ = this.service.getProduct(this.pd);
  }

  ngAfterViewInit(){
    this.product$.subscribe(x=>{
      let term: cok[] = [];
      this.tBill = ~~((x.price * ((100 - x.discount)/100))*this.np*100)/100;
      this.nameUser = this.cookie.get('Name');
      term[0]={name: this.nameUser, pdname: x.name, amount: this.np, totalbill: this.tBill}
      this.cookieArray.push(term[0]);
      // this.cookie.set('Bill', this.nameUser + '-' + x.name + '-' + this.np + '-' + this.tBill);
      this.cookie.set('Bill', JSON.stringify(this.cookieArray));
      this.fBill = JSON.parse(this.cookie.get('Bill'));
      console.log('fbill', this.fBill);
      // this.info = this.fBill.split('-');
      
    })
  }
}

interface cok{
  name: string;
  pdname: string;
  amount: number;
  totalbill: number;
}