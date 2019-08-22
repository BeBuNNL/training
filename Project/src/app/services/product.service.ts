import { Injectable } from '@angular/core';
import { Product } from "../models/products.model";
import { LocalStorageService } from "./local-storage.service";
import { Filter } from "../models/filterInHomepage.model";
import { Observable, BehaviorSubject } from "rxjs";
import { PRODUCTS } from '../database/products-list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private static readonly ProductStorageKey = 'product';

  private products: Product[];
  private filteredProducts: Product[];
  private currentFilter: Filter = Filter.all;
  private lengthFilterProductSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  // private productSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  private displayProductSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  products$: Observable<Product[]> = this.displayProductSubject.asObservable();
  lenght$: Observable<number> = this.lengthFilterProductSubject.asObservable();

  constructor(
    private storgeService: LocalStorageService,
  ) {
    this.products = PRODUCTS;
    this.updateToLocalStorage();
    this.fetchFromLocalStorage();
  }

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

  // addProduct(title: string, any: string){
  //   const date = new Date(Date.now()).getTime();
  //   const newProduct = new Product(date, title, ...any);
  //   this.products.push(newProduct);
  //   this.updateToLocalStorage();
  // }

  // changeProductStatus(id: number, isNew: boolean){
  //   const index = this.products.findIndex(pos => pos.id === id);
  //   const product = this.products[index];
  //   product.isNewest = isNew;
  //   this.products.splice(index, 1, product);
  //   this.updateToLocalStorage();
  // }

  // editProduct(id: number, content: string){
  //   const index = this.products.findIndex(pos => pos.id === id);
  //   const product = this.products[index];
  //   //data product
  //   this.products.splice(index, 1, product);
  //   this.updateToLocalStorage();
  // }

  // deleteproduct(id: number){
  //   const index = this.products.findIndex(pos => pos.id === id);
  //   this.products.splice(index, 1);
  //   this.updateToLocalStorage();
  // }

  filterProducts(filter: Filter, isFiltering: boolean = true){
    this.currentFilter = filter;
    switch (filter) {
      case Filter.all:
        this.filteredProducts = this.products.filter(product => product.isNewest);
        break;
      case Filter.hot:
        this.filteredProducts = this.products.filter(product => product.isHot);
        break;
      case Filter.bestSellers:
        this.filteredProducts = this.products.sort(
          (cur, acc) => (cur.countSale > acc.countSale) ? 1 : ((acc.countSale > cur.countSale) ? -1 : 0)
        );
        break;
    }

    if (isFiltering){
      this.updateProductsData();
    }
  }
  
  private updateProductsData(){
    this.displayProductSubject.next(this.filteredProducts);
    this.lengthFilterProductSubject.next(this.filteredProducts.length);
  }

  getProduct(id){
    return this.products.find(product => product.id == id);
  }

  addToCart(id){
    this.storgeService.setObject('cart_item', this.products.find(
      product => product.id == id
    ));
  }

  addToWishlist(id){
    this.storgeService.setObject('wishlist_item', this.products.find(
      product => product.id == id
    ));
  }
}
