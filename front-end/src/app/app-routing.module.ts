import { Injector, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OktaAuthGuard, OktaAuthModule,OktaCallbackComponent,OKTA_CONFIG } from '@okta/okta-angular';
import { LoginComponent } from './components/login/login.component';
import { MembersPageComponent } from './components/members-page/members-page.component';
import { OktaAuth } from '@okta/okta-auth-js';



function sendToLoginPage(oktaAuth:OktaAuth,injector:Injector){
  const router = injector.get(Router);

  router.navigate(['/login']);
}


const routes: Routes = [
  {path:'members',component:MembersPageComponent,canActivate:[OktaAuthGuard],data:{onAuthRequired:sendToLoginPage}},
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
