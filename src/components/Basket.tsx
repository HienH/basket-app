import React from "react";
import { IProduct } from "../models/IProduct";
import Product from "./Product";
import Button from "@material-ui/core/Button";
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
        <div className="basket">
            <h2 style={{ fontFamily: "Lexend Mega", marginTop: "40px" }}>
                Your Shopping Basket
            </h2>
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
                            <h4>Quantity: {product.amount}</h4>
                            <h4>
                                Total Cost: £
                                {calTotalCost(product.amount, product.price)}
                            </h4>
                        </>
                    );
                })
            ) : (
                <p> You have nothing in you're Basket</p>
            )}

            <h4 className="final-cost">
                Final Cost: £{finalCost()}
                <Button
                    style={{ width: "100%", marginTop: "10px" }}
                    variant="contained"
                    color="primary"
                    // onClick={() => {
                    //     buttonClick(product);
                    // }}
                >
                    Checkout
                </Button>
            </h4>
        </div>
    );
};

export default Basket;
