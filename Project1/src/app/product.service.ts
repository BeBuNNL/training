import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { PRODUCTS, product, categoryList, prodCate } from './app.component'
import { map, take, toArray, mergeAll, tap, distinct, pluck, groupBy, mergeMap, reduce, filter } from 'rxjs/operators';

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
      //tap(x=>x),
      map((product: product[])=>product.filter(product => product.hot === true)),
      mergeAll(),
      take(5),
      toArray()
    );
  }

  getbestsaleProduct() {
    return this.getProducts().pipe(
      //tap(x=>x),
      map((product: product[])=>product.sort((a,b)=>b.cop-a.cop)),
      mergeAll(),
      take(5),
      toArray()
    ); 
  }

  getCategoryList(): Observable<prodCate[]>{
    return of(categoryList);
  }

  getCategory(){
    return this.getCategoryList().pipe(
      mergeAll(),
      groupBy(p=>p.category, p=>p.subCate),
      mergeMap(grp$=>grp$.pipe(
      reduce((acc,cur)=>[...acc,cur],[`${grp$.key}`])
      )),
      map(arr=>({category: arr[0], subCate: arr.slice(1)})),
      toArray()
    )
  }

  getProdByID(x: any){
    return this.getCategoryList().pipe(
      tap(z=>z),
      mergeAll(),
      filter(key => key.subCate === x),
      map(y => { return y.id })
    )
  }

  getProductByCategory(x: number){
    return this.getProducts().pipe(
      map((product: product[]) => product.filter(product => product.cateID === x))
    )
  }

  getProd(){
    return this.getCategoryList().pipe(
      tap(x=>x),
      mergeAll(),
      filter(key=>key.subCate === 'TVs'),
      map(y=>{return y.id}),

    )
  }
}
