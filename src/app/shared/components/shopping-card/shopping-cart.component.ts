import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartModel } from 'src/app/core/models/shoppng-cart.model';
import { SpotModel } from 'src/app/core/models/spot.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

    @Input() shoppingCart: ShoppingCartModel;

    @Output() clearCart = new EventEmitter<void>();
    @Output() removeItem = new EventEmitter<SpotModel>();

    constructor() {

    }

    clear() {
      this.clearCart.emit();
    }
    
}