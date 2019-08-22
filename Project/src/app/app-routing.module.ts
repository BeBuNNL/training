import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  // {path: "/contact", redirectTo: ""},
  {path: "about", component: AboutPageComponent},
  {path: "product/:key", component: ProductDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
