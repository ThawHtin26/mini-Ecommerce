import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/proudct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css',]
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  currentCategoryId:number = 1;
  priviousCategoryId:number = 1;
  searchMode:boolean = false;



  pageSize:number=10;
  totalElements:number=0;
  totalPages:number=0;
  pageNumber:number=1;

  constructor(private productService:ProductService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.listProducts();
    })
  }

  listProducts()
  {
    this.searchMode =  this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode)
    {
      this.handleSearchProducts();
    }else{
      this.handlelistProducts();
    }
  }

  handleSearchProducts()
  {
    const thekeyword:string = this.route.snapshot.paramMap.get('keyword');
    this.productService.searchProducts(thekeyword).subscribe(
      data=>{
        this.products = data["products"];
      }
    )
  }



  handlelistProducts(){

    const hasCategoryId :boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    }
    else{
      this.currentCategoryId = 1;
    }


    if(this.priviousCategoryId != this.currentCategoryId)
    {
      this.pageNumber = 1;
    }

    this.priviousCategoryId = this.currentCategoryId;

    console.log(`current=${this.currentCategoryId},the previous=${this.priviousCategoryId}`)

    this.productService.getProductListPaginate(this.pageNumber-1,this.pageSize,
        this.currentCategoryId).subscribe(data=>{
          this.pageNumber = data['pageNo']+1;
          this.pageSize = data['pageSize'];
          this.totalElements = data['totalElements'];
          this.products = data['products'];
        })
      }

}
