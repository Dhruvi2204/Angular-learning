import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  constructor() {}
  // Signal to store items in cart and total price
  cart = signal<{ items: string[]; totalPrice: number }>({
    items: [],
    totalPrice: 0,
  });

  addToCart(item: string, cost: number) {
    this.cart.update((cuurentCart) => ({
      items: [...cuurentCart.items, item],
      totalPrice: cuurentCart.totalPrice + cost,
    }));
  }

  clearCart() {
    this.cart.set({ items: [], totalPrice: 0 });
  }
}
