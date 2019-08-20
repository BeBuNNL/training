import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { fromEvent } from 'rxjs';
import { pluck, map, toArray } from 'rxjs/operators';
import { AppComponent, subBrand } from '../app.component';
import { toASCII } from 'punycode';

@Component({
  selector: 'app-prodcate',
  templateUrl: './prodcate.component.html',
  styleUrls: ['./prodcate.component.css']
})
export class ProdcateComponent implements OnInit {
  imgUrl = 'https://www.w3schools.com/bootstrap/la.jpg';
  subCate;
  cateID;
  productCate$;
  displayMode = 2;
  productBrand;
  stateCategoryFilter = 0;
  stateAttrFilter = 0;
  selectedBrand = '';
  subBrandArr = subBrand;

  constructor(
    private route: ActivatedRoute,
    private pServ: ProductService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.subCate = params.subcategory;
    })
    this.pServ.getProdByID(this.subCate).subscribe((x: number)=>{this.cateID = x});
    this.pServ.getProductByCategory(this.cateID).pipe(
      map((product) => product.sort((acc,cur) => cur.name > acc.name ? 1 : -1))
    ).subscribe(x=>this.productCate$ = x);
    this.pServ.getBrandOfProduct(this.cateID).subscribe(x => this.productBrand = x);
    console.log(this.productBrand);
  }

  onDisplayMode(mode: number){
    this.displayMode = mode;
  }

  onChange(value){
    this.productCate$.filter()
    let arrayProductById = this.pServ.getProductByCategory(this.cateID);
    switch (value) {
      case 'Rating':
        arrayProductById.pipe(
          map((product) => product.sort((acc,cur) => cur.vote - acc.vote))
        ).subscribe(x=>this.productCate$ = x)
        break;
      case 'Price (Low to High)':
        arrayProductById.pipe(
          map((product) => product.sort((acc,cur) => acc.price - cur.price))
        ).subscribe(x=>this.productCate$ = x)
        break;
      case 'Price (High to Low)':
        arrayProductById.pipe(
          map((product) => product.sort((acc,cur) => cur.price - acc.price))
        ).subscribe(x=>this.productCate$ = x)
        break;
      default:
          arrayProductById.pipe(
            map((product) => product.sort((acc,cur) => cur.name > acc.name ? 1 : -1))
          ).subscribe(x=>this.productCate$ = x)
        break;
    }
  }
  
  changeSubCategoryFilter(value){
    //console.log(value);
    if (this.stateCategoryFilter % 2 === 0){
      this.stateCategoryFilter += 1;
      this.selectedBrand = value;
      this.pServ.getBrandOfProductByValue(value, this.cateID).subscribe(brand => this.productBrand = brand);
      this.pServ.getProductByCategory(this.cateID).pipe(
        map((products) => products.filter(product => product.brand === value))
      ).subscribe(result => this.productCate$ = result)
    }
    else if (this.stateCategoryFilter % 2 === 1){
      this.stateCategoryFilter = 0;
      this.selectedBrand = '';
      this.pServ.getBrandOfProduct(this.cateID).subscribe(brand => this.productBrand = brand);
      this.pServ.getProductByCategory(this.cateID).subscribe(result => this.productCate$ = result)
    }
  }

  changeSubBrandFilter(value){
    this.pServ.getProductByBrandAttr(value, this.selectedBrand, this.cateID).subscribe(
      result => this.productCate$ = result
    )
  }
}
