import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OktaAuthModule,OktaCallbackComponent,OKTA_CONFIG } from '@okta/okta-angular';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  {path:'login/callback',component:OktaCallbackComponent},
  {path:'login',component:LoginComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart-details',component:CartDetailsComponent},
  {path:'api/productcategories/:id/products',component:ProductListComponent},
  {path:'api/productcategories/products/search/:keyword',component:ProductListComponent},
  {path:'api/productcategories/:pcid/products/:pid',component:ProductDetailsComponent},
  {path:'',redirectTo:'api/productcategories/1/products',pathMatch:'full'},
  {path:'**',redirectTo:'api/productcategories/1/products',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
