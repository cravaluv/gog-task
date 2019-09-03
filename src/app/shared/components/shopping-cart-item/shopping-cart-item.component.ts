import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SpotModel } from 'src/app/core/models/spot.model';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {

    @Input() item: SpotModel;
    @Output() removeItem = new EventEmitter<SpotModel>();

    showRemove = false;

    remove() {
        this.removeItem.emit(this.item)
    }
    
}