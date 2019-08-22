import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(respone => {
      this.product = this.productService.getProduct(respone.key);
    })
    console.log('product',this.product)
  }

  addToCart(productId) {
    this.productService.addToCart(productId);
  }

  addToWishlist(productId){
    this.productService.addToWishlist(productId);
  }

}
