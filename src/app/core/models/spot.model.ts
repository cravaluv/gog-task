export class SpotModel {
    id: number;
    img: string;
    title: string;
    promotion?: number;
    owned: boolean;
    inCart: boolean;
    oldPrice?: number;
    price: number;
}