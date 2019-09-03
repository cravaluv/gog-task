import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameSpotComponent } from './components/game-spot/game-spot.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { ShoppingCartComponent } from './components/shopping-card/shopping-cart.component';
import { CommonModule } from '@angular/common';  
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GameSpotComponent,
    GameCardComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
    RouterModule 
  ],
  exports: [
      MaterialModule,
      FlexLayoutModule,
      GameSpotComponent,
      GameCardComponent,
      ShoppingCartComponent,
      ShoppingCartItemComponent
  ]
})
export class SharedModule { }
