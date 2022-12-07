import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductPage } from '../common/product-page';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl = "http://localhost:8080/api/productcategories";

  constructor(private httpClient:HttpClient) { }

  getProductList(categoryId:number):Observable<ProductPage>{
    return this.httpClient.get<ProductPage>(`this.baseUrl\${categoryId}\products`);
  }
}
