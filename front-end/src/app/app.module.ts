import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryService } from './services/product-category.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService,ProductCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
