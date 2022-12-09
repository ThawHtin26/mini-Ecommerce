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

  getProduct(categoryId:number,productId:number):Observable<Product>
  {
    return this.httpClient.get<Product>(`${this.baseUrl}/${categoryId}/products/${productId}`);
  }


  getProductListPaginate(thePage:number,thePageSize:number,categoryId:number):Observable<ProductPage>
  {
    const url = `${this.baseUrl}/${categoryId}/products?pageNo=${thePage}&pageSize=${thePageSize}`;

    return this.httpClient.get<ProductPage>(url);
  }

}
