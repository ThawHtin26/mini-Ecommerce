import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cartitem } from 'src/app/common/cartitem';
import { Product } from 'src/app/common/proudct';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product = undefined;

  constructor(private productService:ProductService,
              private route:ActivatedRoute,
              private cartService:CartService) { }

  ngOnInit(): void {
    this.getProductDetail();
  }

  getProductDetail(){

    const theCategoryId:number = +this.route.snapshot.paramMap.get('pcid');
    const theProductId:number = +this.route.snapshot.paramMap.get('pid');

    this.productService.getProduct(theCategoryId,theProductId).subscribe(data=>{
      this.product = data;
    })

  }

  addToCart(proudct:Product)
  {
    let cartItem = new Cartitem(proudct);
    this.cartService.addToCart(cartItem);
  }

}
