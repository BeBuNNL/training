import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProdcateComponent } from './prodcate/prodcate.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: CartComponent},
  // {path: 'product', redirectTo: ''},
  {path: 'product', component: ProductComponent},
  {path: 'product/:key', component: ProductDetailComponent},
  {path: 'addtocart', component: CartComponent},
  {path: 'category', component: ProdcateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }