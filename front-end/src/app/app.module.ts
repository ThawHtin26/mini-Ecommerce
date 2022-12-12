import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryService } from './services/product-category.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartstatusComponentComponent } from './components/cartstatus-component/cartstatus-component.component';
import { CartService } from './services/cart.service';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import myAppConfig from './config/my-app-config';
import { OktaAuth } from '@okta/okta-auth-js';
import { MembersPageComponent } from './components/members-page/members-page.component';

const oktaConfig=myAppConfig.odic;

const oktaAuth = new OktaAuth(oktaConfig);


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SidebarComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartstatusComponentComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginStatusComponent,
    MembersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    OktaAuthModule
  ],
  providers: [ProductService,ProductCategoryService,CartService,{provide:OKTA_CONFIG,useValue:{oktaAuth}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
