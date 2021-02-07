import { IProduct } from "../models/IProduct";
import Product from "./Product";

export interface BasketProps {
    basket: IProduct[];
    deleteFromBasket: (product: IProduct) => void;
}

const Basket = ({ basket, deleteFromBasket }: BasketProps) => {
    return (
        <>
            <h1>Your Shopping Basket</h1>
            {basket.map((product) => {
                return (
                    <Product
                        buttonClick={() => deleteFromBasket(product)}
                        buttonName="Delete"
                        key={product.id}
                        product={product}
                    />
                );
            })}
        </>
    );
};

export default Basket;
