import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-spot',
  template: `
    <div class="game-spot">
        GAME OF THE WEEK
        <img [src]="image" class="center">
    </div>
  `,
  styleUrls: ['./game-spot.component.scss']
})
export class GameSpotComponent {

    @Input() image: string;
}