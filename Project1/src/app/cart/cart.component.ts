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
  quantity: number;
  nameUser: string = 'user';
  tBill: number;
  fBill: string;
  info: string[];
  cookieArray: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private cookie: CookieService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.pd = params.pd;
      this.quantity = params.quantity;
    })
    this.product$ = this.service.getProduct(this.pd);
    if (this.cookie.get('Bill') !== null){
      let term = JSON.parse(this.cookie.get('Bill'));
      console.log('oninit',term);
      this.cookieArray.push(JSON.stringify(term));
      console.log('oninit arr', this.cookieArray);
      let tam = JSON.parse(this.cookie.get('Bill'));
      console.log('test', tam);
    }
  }

  ngAfterViewInit(){
    this.product$.subscribe(x=>{
      let term;
      this.tBill = ~~((x.price * ((100 - x.discount)/100))*this.quantity*100)/100;
      this.nameUser = this.cookie.get('Name');
      term={name: this.nameUser, pdname: x.name, amount: this.quantity, totalbill: this.tBill};
      this.cookieArray.push(JSON.stringify(term));
      // this.cookie.set('Bill', this.nameUser + '-' + x.name + '-' + this.np + '-' + this.tBill);
      this.cookie.set('Bill', JSON.stringify(term));
      this.fBill = JSON.parse(this.cookie.get('Bill'));
      console.log('fbill', this.fBill);
      // this.info = this.fBill.split('-');
      
    })
  }
}

// interface cok{
//   name: string;
//   pdname: string;
//   amount: number;
//   totalbill: number;
// }