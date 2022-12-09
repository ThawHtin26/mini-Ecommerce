import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cartstatus-component',
  templateUrl: './cartstatus-component.component.html',
  styleUrls: ['./cartstatus-component.component.css']
})
export class CartstatusComponentComponent implements OnInit {

  totalQuantity:number  = 0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus()
  {
        this.cartService.totalQuantity.subscribe(
          data=>{
            this.totalQuantity = data
          }
        )
  }

}
