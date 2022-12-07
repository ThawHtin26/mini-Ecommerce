import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductCategoryService } from 'src/app/services/product-category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  productCategories : ProductCategory[] = [];

  constructor(private productCategoryService:ProductCategoryService) { }

  ngOnInit(): void {
    this.listByProductCategory();
  }

  listByProductCategory()
  {
    this.productCategoryService.getProductCategoryList().subscribe(data=>{
      this.productCategories = data;
    })
  }

}
