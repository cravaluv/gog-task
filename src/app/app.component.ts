import { Component, OnInit } from '@angular/core';
import { ShoppingCartModel } from './core/models/shoppng-cart.model';
import { SpotModel } from './core/models/spot.model';
import { CartService } from './core/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  imageSpotScr = "../assets/img/game-bg.png";
  showCart = false;


  constructor(public cartStore: CartService) { }

  ngOnInit(): void {

  }

  addToCart(item: SpotModel) {
    this.cartStore.addToCart(item);
  }

  removeFromCart(item: SpotModel) {
    this.cartStore.deleteFromCart(item)
  }

  clearCart() {
    this.cartStore.clearCart();
  }

}
