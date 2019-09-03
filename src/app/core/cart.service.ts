import { Injectable } from '@angular/core';
import { SpotModel } from './models/spot.model';
import { ShoppingCartModel } from './models/shoppng-cart.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CartService {

    constructor() {
        this.spots = [
            {
                id: 1,
                img: "../../../../assets/img/oddworld.png",
                title: "Oddworld: Stranger's Wrath",
                promotion: 50,
                owned: false,
                inCart: false,
                oldPrice: 9.99,
                price: 4.99
            },
            {
                id: 2,
                img: "../../../../assets/img/chaos.png",
                title: "Chaos On Deponia",
                owned: true,
                inCart: false,
                price: 9.99
            },
            {
                id: 3,
                img: "../../../../assets/img/settlers.png",
                title: "The Settlers 2: Gold Editon",
                owned: false,
                inCart: false,
                price: 9.99
            },
            {
                id: 4,
                img: "../../../../assets/img/nvn-bg.png",
                title: "Neverwinter Nights",
                promotion: 50,
                owned: false,
                inCart: false,
                oldPrice: 9.99,
                price: 4.99
            }
            ,
            {
                id: 5,
                img: "../../../../assets/img/ac.png",
                title: "Assassin's Creed: Director's Cut",
                owned: false,
                inCart: false,
                price: 4.99
            }
        ]
    }

    private readonly _spots = new BehaviorSubject<SpotModel[]>([]);

    readonly spots$ = this._spots.asObservable();

    private readonly _cart = new BehaviorSubject<ShoppingCartModel>(new ShoppingCartModel());

    readonly cart$ = this._cart.asObservable();

    get spots(): SpotModel[] {
        return this._spots.getValue();
    }

    set spots(val: SpotModel[]) {
        this._spots.next(val);
    }

    get cart(): ShoppingCartModel {
        return this._cart.getValue();
    }

    set cart(val: ShoppingCartModel) {
        this._cart.next(val);
    }

    
    addToCart(item: SpotModel) {
        this.cart.addToCart(item);
        this.spots.find(i => i.id === item.id).inCart = true;
    }

    deleteFromCart(item: SpotModel) {
        this.cart.deleteFromCart(item);
        this.spots.find(i => i.id === item.id).inCart = false;
    }

    clearCart() {
        this.cart = new ShoppingCartModel();
        this.spots.forEach(spot => {
            spot.inCart = false;
        })
    }

}