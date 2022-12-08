import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductPage } from '../common/product-page';
import { Product } from '../common/proudct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseUrl = "http://localhost:8080/api/productcategories";

  constructor(private activeRout:ActivatedRoute,
    private httpClient:HttpClient) { }

  getProductList(categoryId:number):Observable<ProductPage>{
    return this.httpClient.get<ProductPage>(`${this.baseUrl}/${categoryId}/products`);
  }

  searchProducts(thekeyword:string):Observable<ProductPage>{
    const searchUrl = `${this.baseUrl}/products/search?name=${thekeyword}`;
    return this.httpClient.get<ProductPage>(searchUrl);
  }

}
