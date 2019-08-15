import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

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


  constructor(
    private route: ActivatedRoute,
    private pServ: ProductService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.subCate = params.subcategory;
    })
    this.pServ.getProdByID(this.subCate).subscribe((x: number)=>{this.cateID = x}),
    this.pServ.getProductByCategory(this.cateID).subscribe(x=>{this.productCate$=x})
  }

  onDisplayMode(mode: number){
    this.displayMode = mode;
  }
}
