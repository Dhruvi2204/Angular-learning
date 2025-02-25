import { Component } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [NgFor, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  totalPrice!: number;
  cart!: any;
  constructor(private cartSrv: CartServiceService) {
    this.cart = this.cartSrv.cart;
  }

  addToCart() {
    this.cartSrv.addToCart('item', 200);
    this.totalPrice = this.cartSrv.cart().totalPrice;
  }
  emptyCart() {
    this.cartSrv.clearCart();
    this.totalPrice = this.cartSrv.cart().totalPrice;
  }
}
