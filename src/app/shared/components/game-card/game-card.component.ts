import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SpotModel } from 'src/app/core/models/spot.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {

    @Input() game: SpotModel;
    @Output() addToCart = new EventEmitter<SpotModel>();

    add() {
      this.addToCart.emit(this.game);
    }

}
