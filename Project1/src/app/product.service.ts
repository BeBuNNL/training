import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { PRODUCTS, product } from './app.component'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<product[]>{
    return of(PRODUCTS);
  }

  getProduct(key: string) {
    return this.getProducts().pipe(
      map((product: product[])=>product.find(product => product.name === key))
    );
  }
}
