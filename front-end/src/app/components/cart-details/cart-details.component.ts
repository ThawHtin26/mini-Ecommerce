import { Component, OnInit } from '@angular/core';
import { Cartitem } from 'src/app/common/cartitem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: Cartitem[] = [];
  totalPrice:number = 0;
  totalQuantity:number = 0;


  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.listCartDetails();
  }


  listCartDetails()
  {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(
      data=>this.totalPrice =data
    )

    this.cartService.totalQuantity.subscribe(
      data=>this.totalQuantity = data
    )


    this.cartService.computeCartTotals();


  }


  incrementQuantity(theCartItem:Cartitem)
  {
    this.cartService.addToCart(theCartItem);
  }


  decrementQuantity(theCartItem:Cartitem)
  {
    theCartItem.quantity --;
    if(theCartItem.quantity === 0){
      this.remove(theCartItem);
    }
    else{
      this.cartService.computeCartTotals();
    }
  }

  remove(theCartItem:Cartitem)
  {
    const itemIndex = this.cartItems.findIndex(
      tempCartItem => tempCartItem.id == theCartItem.id
    )

      if(itemIndex > -1)
      {
        this.cartItems.splice(itemIndex,1);
        this.cartService.computeCartTotals();
      }

  }


}
