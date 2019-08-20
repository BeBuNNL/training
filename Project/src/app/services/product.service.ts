import { Injectable } from '@angular/core';
import { Product } from "../models/products.model";
import { LocalStorageService } from "./local-storage.service";
import { Filter } from "../models/filterInHomepage.model";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private static readonly ProductStorageKey = 'product';

  private products: Product[];
  private filteredProducts: Product[];
  private currentFilter: Filter = Filter.all;
  //private lenghtSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private productSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private displayProductSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  products$: Observable<Product[]> = this.displayProductSubject.asObservable();
  //lenght$: Observable<number> = this.lenghtSubject.asObservable();

  constructor(
    private storgeService: LocalStorageService
  ) { }

  fetchFromLocalStorage(){
    this.products = this.storgeService.getValue<Product[]>(ProductService.ProductStorageKey) || [];
    this.filteredProducts = [...this.products];
    this.updateProductsData();
  }

  updateToLocalStorage(){
    this.storgeService.setObject(ProductService.ProductStorageKey, this.products);
    this.filterProducts(this.currentFilter, false);
    this.updateProductsData();
  }

  addProduct(title: string, any: string){
    //const date = new Date(Date.now()).getTime();
    //const newProduct = new Product(date, title, ...any);
    //this.products.push(newProduct);
    this.updateToLocalStorage();
  }

  changeProductStatus(id: number, isFiltered: boolean){
    const index = this.products.findIndex(pos => pos.id === id);
    const product = this.products[index];
    product.isFiltered = isFiltered;
    this.products.splice(index, 1, product);
    this.updateToLocalStorage();
  }

  editProduct(id: number, content: string){
    const index = this.products.findIndex(pos => pos.id === id);
    const product = this.products[index];
    //data product
    this.products.splice(index, 1, product);
    this.updateToLocalStorage();
  }

  deleteproduct(id: number){
    const index = this.products.findIndex(pos => pos.id === id);
    this.products.splice(index, 1);
    this.updateToLocalStorage();
  }

  
  filterProducts(filter: Filter, isFiltering: boolean = true){
    this.currentFilter = filter;
    switch (filter) {
      case Filter.all:
        this.filteredProducts = this.products.filter(product => !product.isFiltered);
        break;
      case Filter.hot:
        this.filteredProducts = this.products.filter(product => product.isHotProduct);
        break;
      case Filter.bestSellers:
        this.filteredProducts = this.products.sort(
          (cur, acc) => (cur.isSale > acc.isSale) ? 1 : ((acc.isSale > cur.isSale) ? -1 : 0)
        );
        break;
    }

    if (isFiltering){
      this.updateProductsData();
    }
  }
  private updateProductsData(){
    this.displayProductSubject.next(this.filteredProducts);
    //this.lengthSubject.next(this.products.length);
  }
}
