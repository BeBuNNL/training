import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { PRODUCTS, product } from './app.component'
import { map, take, toArray, mergeAll, tap } from 'rxjs/operators';

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
      tap(x=>x),
      map((product: product[])=>product.find(product => product.name === key))
    );
  }

  gethotProduct() {
    return this.getProducts().pipe(
      tap(x=>x),
      map((product: product[])=>product.filter(product => product.hot === 1))
    );
  }

  getbestsaleProduct() {
    return this.getProducts().pipe(
      tap(x=>x),
      map((product: product[])=>product.sort((a,b)=>b.cop-a.cop)),
      mergeAll(),
      take(5),
      toArray()
    ); 
  }
}
