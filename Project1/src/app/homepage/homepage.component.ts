import { Component, OnInit } from '@angular/core';
import { product, prodCate } from '../app.component'
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from '../product.service'
import { OwlOptions } from 'ngx-owl-carousel-o'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  hotProducts$: Observable<product[]>;
  bestsaleProducts$: Observable<product[]>;
  selectedProduct: string;
  imgUrl = 'https://www.w3schools.com/bootstrap/la.jpg';
  mainCate: Observable<{ category: string | string[]; subCate: (string | string[])[]; }[]>;
  subCate: Observable<string[]>;
  objKeys = Object.keys;
  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.hotProducts$ = this.service.gethotProduct();
    this.bestsaleProducts$ = this.service.getbestsaleProduct();
    // this.hotProducts$ = this.route.paramMap.pipe(
    //   switchMap(()=>{
    //     return this.service.gethotProduct();
    //   })
    // ),

    // this.bestsaleProducts$ = this.route.paramMap.pipe(
    //   switchMap(()=>{
    //     return this.service.getbestsaleProduct();
    //   })
    // ),

    // this.mainCate = this.route.paramMap.pipe(
    //   switchMap(()=>{
    //     return this.service.getMainCategory();
    //   })
    // ),
    // this.subCate = this.route.paramMap.pipe(
    //   switchMap(()=>{
    //     return this.service.getSubCategory()
    //   })
    // ),
    // this.mainCate = this.route.paramMap.pipe(
    //   switchMap(()=>{
    //     return this.service.getCategory();
    //   })
    // ),
    this.mainCate = this.service.getCategory();
    console.log('1',this.bestsaleProducts$),
    console.log(this.mainCate, '-', this.subCate)
  }

  gotoProdSubcate(x:any){
    this.router.navigate(['/category'],{queryParams: {subcategory: x}});
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['Prev','Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      960: {
        items: 3
      }
    },
    nav: true,
    margin: 10,
  }
}
