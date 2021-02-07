import { IProduct } from "../models/IProduct";
import Product from "./Product";

export interface BasketProps {
    basket: IProduct[];
    deleteFromBasket: (product: IProduct) => void;
}

const Basket = ({ basket, deleteFromBasket }: BasketProps) => {
    //calculate total cost
    const calTotalCost = (price: number, quantity: number) => {
        return price * quantity;
    };

    const finalCost = () => {
        return basket.reduce(
            (ack: number, product) => ack + product.price * product.amount,
            0
        );
    };
    return (
        <>
            <h1>Your Shopping Basket</h1>
            {basket.length > 0 ? (
                basket.map((product) => {
                    return (
                        <>
                            <Product
                                buttonClick={() => deleteFromBasket(product)}
                                buttonName="Delete"
                                key={product.id}
                                product={product}
                            />
                            <p>Quantity: {product.amount}</p>
                            <p>
                                Total Cost: £
                                {calTotalCost(product.amount, product.price)}
                            </p>
                        </>
                    );
                })
            ) : (
                <p> You have nothing in you're Basket</p>
            )}
            <p>Final Cost: {finalCost()}</p>
        </>
    );
};

export default Basket;
