export class IProduct {
    id: number;
    image: string;
    title: string;
    price: number;
    amount?: number;

    constructor() {
        this.id = 0;
        this.image = "";
        this.title = "";
        this.price = 0;
        this.amount = 0;
    }
}
