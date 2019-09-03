import { SpotModel } from './spot.model';

export class ShoppingCartModel {
    totalPrice: number = 0;
    items: Array<SpotModel> = new Array<SpotModel>();

    addToCart(item: SpotModel) {
        this.totalPrice += item.price;
        this.items.push(item);
    }

    deleteFromCart(item: SpotModel) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1); 
        this.totalPrice -= item.price;
    }
}