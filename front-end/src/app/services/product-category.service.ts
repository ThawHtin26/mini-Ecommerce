import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  private baseUrl = "http://localhost:8080/api/productcategories";

  constructor(private httpClient:HttpClient) { }

  getProductCategoryList():Observable<ProductCategory[]>
  {
    return this.httpClient.get<ProductCategory[]>(this.baseUrl);
  }

}
